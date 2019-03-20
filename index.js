const http = require('http');
const bodyParser = require('body-parser');
const express = require('express');
const routes = require('./routes');
const config = require('config');
const app = express();

const client = config.get('client');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use((req, res, next) => {  
  res.setHeader('Access-Control-Allow-Origin', client);
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);  
  next();
});

routes(app);

const server = http.createServer(app);
const port = process.env.PORT || 3001;

server.listen(port);
console.log("Listening on port %s :", server.address().port);
