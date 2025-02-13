//
// SQLite3
//
// Zur Installation bitte folgendes Kommando in der Kommandozeile eingeben...
// npm install sqlite3
// 

const sqlite3 = require('sqlite3')

const db = new sqlite3.Database('database.db')

//db.run('CREATE TABLE IF NOT EXISTS Users( id INTEGER PRIMARY KEY, name TEXT, pw TEXT )')

//
// Führt den Callback für jede Zeile der SQL-Abfrage durch
//
db.all('SELECT * FROM Users', (err, rows) => {
	if(err) throw err;
	// id,name,pw muss euren Spaltennamen entsprechen
	rows.forEach( row => console.log( row.id, row.name, row.pw )) 
})
