const http = require('http');
const bodyParser = require('body-parser');
const express = require('express');
const routes = require('./routes');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use((req, res, next) => {
  const allowedDomains = ['http://localhost:4200', 'https://simplezero.herokuapp.com'];
  const origin = req.get('origin');
  const index = allowedDomains.findIndex(origin);
  let defaultOrigin = 'https://simplezero.herokuapp.com';
  index != -1? defaultOrigin = allowedDomains[index] : defaultOrigin = defaultOrigin;
  
  res.setHeader('Access-Control-Allow-Origin', defaultOrigin);
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
