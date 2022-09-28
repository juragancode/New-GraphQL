const http = require('http');
const express = require('express');

const app = express();

app.use((req, res, next) => {
  console.log('Mamam');
  res.send('<h1>Hello from Express</h1>');
  // next();
});

// const server = http.createServer(app);

// server.listen(5000);

app.listen(5000);
