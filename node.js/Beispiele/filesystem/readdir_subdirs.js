const fs = require("fs");
const process = require("process")


let totalfiles = 0

function read_directory( path ) {
	return new Promise( (resolve,reject) => {
		fs.readdir(path , {withFileTypes: true}, ( err, files) => {
			let promises = []
			if(err){
				reject( err ) 
				return
			}
			
			files.forEach( file => {
				if( !file.isFile() ) {
					let rd = read_directory( `${path}/${file.name}`  )
					promises.push( rd )
				}
				//totalfiles++
			})
			
			if(files.every( file => file.isFile() ) ) {
				resolve( files )
				return
			}
			
			Promise.all( promises ).then( foo => {resolve(foo.flat())}) 
			
		})	
	})
}

if( process.argv.length < 3) {
	console.error("usage: node readdir_subdirs.js PATH")
}

else {
	
	read_directory( process.argv.pop() )
	.then( bar => {
		
		console.log(bar.flat().length)	
	})
	.catch( promise_error => console.error( "(Un)expected error" ) )
	
}
