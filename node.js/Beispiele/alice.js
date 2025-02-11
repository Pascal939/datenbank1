const fs = require("fs")


fs.readFile( "alice.txt", "utf-8",( err, content ) => {
	
	if(err) {
		console.error("Achtung, Datei konnte nicht geöffnet werden")
	}
	else {
		console.log( "lines: " , content.split("\n").length ) 
		console.log( "zeichen: " , content.length ) 
		console.log(content.replace(/[^A]/g, ""))
		console.log("Zeichen A: ",content.replace(/[^A]/g, "").length)
		console.log("Zeichen a: ",content.replace(/[^a]/g, "").length)
		
		const chars = {}
		
		content.split("").forEach( chr => {
			if( Object.keys(  chars ).includes( chr ) ) {
				chars[ chr ]++;
			}
			else {
				chars[ chr ]  = 1
			}
		})
		
		const sorted = Object.entries( chars ). sort( (a,b) => b[1] - a[1] )
		
		
		console.log( sorted.slice(0,5).map( value => {
			value.push( value[1] / content.length * 100 )
			return value
		}))
		
		const total = sorted.slice(0,5).map(v=>v[1]).reduce( (a,b)  => a + b)
		console.log( total)		
		console.log( sorted.slice(0,5).map( value => {
			value.push( value[1] / total * 100 )
			return value
		}))
		
	}
	
})