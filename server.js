console.log("hello server");
console.log("hello nodemon");

var http = require('http');
var _ = require('lodash');

var fs = require('fs');

var index = fs.readFileSync('index.html');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end(index);
}).listen(8080);