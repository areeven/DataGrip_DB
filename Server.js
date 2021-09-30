let dotenv = require('dotenv')
dotenv.config()
const key = process.env.PASSWORD

let mysql = require('mysql2')

// Skapande av kontakt till databas
let db_con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: key
})

db_con.connect((err) => {
    if (err) throw err
    console.log('Connected to database')
})

