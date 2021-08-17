const SocketActions = require('../constants');

const Transaction = require('../models/transaction.model');
const Blockchain = require('../models/chain.model');

const socketListeners = (socket, chain) => {
  socket.on("ADD_TRANSACTION", (sender, receiver, amount) => {
    console.log("add transction")
    const transaction = new Transaction(sender, receiver, amount);
    chain.newTransaction(transaction);
  });

  socket.on("END_MINING", (newChain) => {
    console.log('End Mining encountered');
    process.env.BREAK = true;
    const blockChain = new Blockchain();
    blockChain.parseChain(newChain);
    if (blockChain.checkValidity() && blockChain.getLength() >= chain.getLength()) {
      chain.blocks = blockChain.blocks;
    }
  });

  socket.on("ADD_USER", (newUser) => {
    console.log("added new User to our ledger", newUser);
    chain.register(newUser);
  });

  socket.on("CHECK", () => {
    console.log("OKAY");
  });

  return socket;
};

module.exports = socketListeners;