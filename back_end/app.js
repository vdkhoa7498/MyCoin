express = require('express');
morgan = require('morgan');
require('express-async-errors');
const cors = require('cors');
require('dotenv').config();

const app = express();
const http = require("http");
const server = http.createServer(app);

app.use(morgan('dev'));
app.use(express.json())


app.use('*', cors());

app.get('/', function(req,res){
    res.json({
        message: 'Hello vivi'
    })
})


app.get('/err', function (req, res) {
    throw new Error('Error!');
  })
  
  app.use(function (req, res, next) {
    res.status(404).json({
      error_message: 'Endpoint not found'
    });
  })
  
  app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500).json({
      error_message: 'Something broke!'
    });
  })


const port = process.env.PORT || 8000
server.listen(port, () => console.log(`server is running at https://localhost${port}`));