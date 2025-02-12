const fs = require("fs");

let totalfiles = 0

function read_directory( path ) {
	return new Promise( (resolve,reject) => {
		fs.readdir(path , {withFileTypes: true}, ( err, files) => {
			if(err){
				reject( err ) 
				return
			}
			
			files.forEach( file => {
				totalfiles++
			})
			
			resolve( totalfiles )
		})	
	})
}

read_directory(".")
.then( promise_totalfiles => {
	console.log(promise_totalfiles)	
})
.catch( promise_error => console.error( "(Un)expected error" ) )