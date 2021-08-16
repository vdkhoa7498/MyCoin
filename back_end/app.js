const app = require('express')();
const bodyParser = require('body-parser');
require('dotenv').config();
const httpServer = require('http').Server(app);
const axios = require('axios');
const io = require('socket.io')(httpServer);
const client = require('socket.io-client');
const EC = require("elliptic").ec;
const ec = new EC("secp256k1");
const Address = require("./models/address");

const BlockChain = require('./models/chain.model');
const SocketActions  = require('./constants');

const socketListeners = require('./socket/socketListeners');

const { PORT } = process.env;
console.log(process.env.PORT)

const blockChain = new BlockChain(null, io);

app.use(bodyParser.json());

app.post("/register", async (req, res) => {
  console.log("register")
  const { name, email } = req.body;
  const keypair = new Address().generateKeyPair();
  
  const newUser = {
    address: keypair.publicKey,
    name: name,
    email: email,
  }
  await blockChain.register(newUser);
  res.json(keypair).end();
});


app.post("/login", async (req, res) => {
  const { publicKey, privateKey } = req.body;
  if (await blockChain.isUserExisting(publicKey)) {
    if (ec.keyFromPrivate(privateKey, "hex").getPublic("hex") === publicKey) {
      const payload =await blockChain.getUserInfo(publicKey);
      res.json(payload).end();
    } else {
      res.json({ status: "invalid private/public key" }).end();
    }
  } else {
    res.json({ status: "This address isn't exist! please register" }).end();
  }
});

app.post('/nodes', (req, res) => {
  const { host, port } = req.body;
  const { callback } = req.query;
  const node = `http://${host}:${port}`;
  const socketNode = socketListeners(client(node), blockChain);
  blockChain.addNode(socketNode, blockChain);
  if (callback === 'true') {
    console.info(`Added node ${node} back`);
    res.json({ status: 'Added node Back' }).end();
  } else {
    axios.post(`${node}/nodes?callback=true`, {
      host: req.hostname,
      port: PORT,
    });
    console.info(`Added node ${node}`);
    res.json({ status: 'Added node' }).end();
  }
});

app.post('/transaction', (req, res) => {
  const { sender, receiver, amount } = req.body;
  io.emit(SocketActions.ADD_TRANSACTION, sender, receiver, amount);
  res.json({ message: 'transaction success' }).end();
});


app.get('/chain', (req, res) => {
  res.json(blockChain.toArray()).end();
});

io.on('connection', (socket) => {
  console.info(`Socket connected, ID: ${socket.id}`);
  socket.on('disconnect', () => {
    console.log(`Socket disconnected, ID: ${socket.id}`);
  });
});

blockChain.addNode(socketListeners(client(`http://localhost:${PORT}`), blockChain));

httpServer.listen(PORT, () => console.info(`Express server running on ${PORT}...`));