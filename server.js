const path = require('path');
const http = require('http');
const express = require('express');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
app.get('/', function(req, res) {
   res.sendFile(path.join(__dirname, './public', 'index.html'));
});

server.listen(port, () => {
  console.log(`Manish App is up on ${port}`);
});
