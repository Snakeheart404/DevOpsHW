const http = require('http');
const port = 80;

http.createServer(function (req, res) {
    
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World!\n');

}).listen(port);

console.log("Server running at port "+port);