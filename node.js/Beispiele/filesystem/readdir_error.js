const fs = require("fs");

let totalfiles = 0

fs.readdir(".", {withFileTypes: true}, ( err, files) => {
	files.forEach( file => {
		totalfiles++
		console.log(file.name)
	})
	
	console.log(totalfiles)
})

console.log(totalfiles) 