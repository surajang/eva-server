const http = require('http');

const port = 8021;

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
	res.write('<h1>Hello, World!</h1>');
	res.end();
}).listen(port, () => {
    console.log(`Server running at localhost:${port}/`);
}); 