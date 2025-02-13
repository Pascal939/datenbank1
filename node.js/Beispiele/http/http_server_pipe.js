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
	
	const stream = fs.createReadStream( req.url )
	
	//
	// Datenstrom hat einen Fehler
	//
	stream.on("error", () =>{
		res.writeHead(404, { 'Content-Type': 'text/plain' });
		res.end("file not found");
	})

	//
	// Datenstrom ist bereit
	//	
	stream.on("ready", () => {
		res.writeHead(200);
		stream.pipe(res); 
	})
});


server.listen(8080, '0.0.0.0', () => {
  console.log('Listening on 127.0.0.1:8080');
});
