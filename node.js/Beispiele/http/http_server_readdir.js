const http = require("http")
const fs = require("fs")


//
// ZUM BEENDEN [ CTRL + C ] in der Kommandozeile
//

const server = http.createServer(( req, res ) => {
	
		

	if( req.url  == "/" ) {
		req.url = "index.html"
		
	}
	else {
		req.url = req.url.substring(1)
	}

	fs.readFile( req.url, "utf-8", (err, content) => {
		if(err) {
			res.writeHead(404, { 'Content-Type': 'text/plain' });
			res.end("file not found");
		}
		
		else {
			res.writeHead(200, { 'Content-Type': 'text/html' });
			res.end(content);
		}
	})
});


server.listen(8080, '0.0.0.0', () => {
  console.log('Listening on 127.0.0.1:8080');
});
