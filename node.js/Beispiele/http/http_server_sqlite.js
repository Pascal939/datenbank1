const http = require("http")
const sqlite3 = require("sqlite3")



function getAllProducts() {
	return new Promise( ( resolve ) => {
		
		const db = new sqlite3.Database('database.db')
		
		db.all( `SELECT * FROM product`,  (err,rows) => {
			resolve( rows) 
		})

		db.close()
	})
}

const server = http.createServer(  (req,res) => {
	

	if( req.url == "/" ) {	
		getAllProducts()
		.then( rows => {
			res.writeHead( 200 ) 
			let html = ""
			let col = 0;
			let bgcolors = ['#888888', '#fff']
			
			rows.forEach( row => {
				html += `<div style='float:left; background-color:${bgcolors[col]}'>${row.name}</div><div style='${bgcolors[col]}'>${row.catId}</div>`
				col++;
				if(col > 1) col = 0
			} )
			
			
			html = `<html><body>${html}</body></html>`
			
			res.end( html );
		})
	}
	else {
		res.writeHead( 404 ) 
		res.end( "" );		
	}
	

})

server.listen( 8000, "127.0.0.1", (err)=> {
	if(err) 
		throw err
	
	console.log("waiting.....")
});