//
// SQLite3
//
// Zur Installation bitte folgendes Kommando in der Kommandozeile eingeben...
// npm install sqlite3
// 

const sqlite3 = require('sqlite3')

const db = new sqlite3.Database('database.db')

//db.run(`CREATE TABLE IF NOT EXISTS 
//product( id INTEGER PRIMARY KEY, name TEXT, catId INTEGER )`)



//
// Führt den Callback für jede Zeile der SQL-Abfrage durch
//
db.all( `SELECT product.*,category.name as catName 
			FROM product,category
			WHERE product.catId = category.id`, (err, rows) => {
	if(err) throw err;
	rows.forEach( row => console.log( row.id, row.name, "-----" , row.catName )) 
})
