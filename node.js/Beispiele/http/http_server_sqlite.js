const http = require("http")
const sqlite3 = require("sqlite3")


//
// Eine Funktion zur Abfrage aller Produkte aus der Datenbank
//
function getAllProducts() {

	//
	// Erzeuge ein neues Promise
	//
	return new Promise( ( resolve ) => {	
		
		//
		// Öffne die Datenbank-Datei "database.db"
		//
		const db = new sqlite3.Database('database.db')
	
		//
		// Abfrage der Datenbank-Produkte, erhalte das Ergebnis als Array [rows]
		//
		db.all( `SELECT * FROM product`,  (err,rows) => {
			
			//
			// Erfülle das Promise
			//			
			resolve( rows) 
		})
		
		//
		// Beende die Datenbankverbindung
		//	
		db.close()
	})
}


//
// Erstelle den HTTP-Server
//	
const server = http.createServer(  (req,res) => {
	
	//
	// Wurde kein besonderer Pfad beim Request angefragt
	//
	if( req.url == "/" ) {	
	
		//
		// rufe die Funktion getAllProducts auf
		//
		getAllProducts()
		
		//
		// getAllProducts Promise erfüllt
		//		
		.then( rows => {
			
			
			//
			// Sende Statuscode 200 an den Benutzer
			//
			res.writeHead( 200 ) 
			
			//
			// HTML .....
			//
			let html = ""
			let col = 0;
			let bgcolors = ['#888888', '#fff']
			
			
			//
			// Für jedes Ergebnis der Datenbankabfrage...
			//
			rows.forEach( row => {
				
				//
				// Füge den ganzen Kram zu einem HTML-String zusammen
				//
				html += `<div style='float:left; background-color:${bgcolors[col]}'>${row.name}</div><div style='${bgcolors[col]}'>${row.catId}</div>`
				col++;
				if(col > 1) col = 0
			} )
			
			//
			// HTML.....
			//			
			html = `<html><body>${html}</body></html>`
			
			
			//
			// Sende den HTML-String zum Client
			//	
			res.end( html );
		})
	}
	
	//
	// Request URL beinhaltet einen Dateinamen (z.B. favicon.ico) 
	//	
	else {
		
				
		//
		// 404 Not Found Error
		//	
		res.writeHead( 404 ) 
		res.end( "" );		
	}
	

})


//
// Starte den Server, horche auf Port 8000 am Interface 127.0.0.1
//
server.listen( 8000, "127.0.0.1", (err)=> {
	if(err) 
		throw err
	
	console.log("waiting.....")
});