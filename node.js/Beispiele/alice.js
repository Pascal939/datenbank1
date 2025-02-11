const fs = require("fs")


// function readfilecontent( err, content ) {
// }
// fs.readFile( "alice.txt", readfilecontent) 



fs.readFile( "alice.txt", "utf-8",( err, content ) => {
	
	if(err) {
		console.error("Achtung, Datei konnte nicht geöffnet werden")
	}
	else {
		console.log(content.substring(0,10))
	}
	
})