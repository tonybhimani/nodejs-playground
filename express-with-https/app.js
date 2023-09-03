// With assistance from source:
//   https://stackoverflow.com/questions/11744975/enabling-https-on-express-js

const fs = require('fs');
const http = require('http');
const https = require('https');
const privateKey = fs.readFileSync('certs/localhost.key', 'utf8');
const certificate = fs.readFileSync('certs/localhost.crt', 'utf8');
const credentials = { key: privateKey, cert: certificate };

const express = require('express');
const app = express();

const httpPort = 8080;
const httpsPort = 8443;

const httpServer = http.createServer(app);
const httpsServer = https.createServer(credentials, app);

app.get('/', (req, res) => {
  res.send("Hello World!");
});

httpServer.listen(httpPort, () => {
    console.log(`Express listing on http port ${httpPort}`);
});

httpsServer.listen(httpsPort, () => {
    console.log(`Express listening on https port ${httpsPort}`);
});