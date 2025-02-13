
const http = require("http")


const server = http.createServer(( req, res ) => {
	res.writeHead(200, { 'Content-Type': 'text/plain' });
	res.end('Hello World!\n');
});


server.listen(8080, '0.0.0.0', () => {
  console.log('Listening on 127.0.0.1:8080');
});
