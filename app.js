const express = require('express');
const app = express();
const path = require("path");
const bodyParser = require('body-parser')
var cors = require('cors')

const config = require("./config/key");
const dashboard = require('./server/routes/dashboard');
const stocks = require('./server/routes/stocks');
const dealers = require('./server/routes/dealers');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/api/dashboard', dashboard);
app.use('/api/stocks', stocks);
app.use('/api/dealers', dealers);

// Serve any static files
app.use(express.static(path.join(__dirname, './client/build')));
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

app.use(cors());

app.get('*', (req, res)=>{
  res.send('<h1>Not found!!!</h1>')
})
app.listen(config.port, ()=>{
  console.log(`Server listening on the port ${config.port}`)
})