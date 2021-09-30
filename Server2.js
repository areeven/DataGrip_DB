let dotenv = require('dotenv')
dotenv.config()
const key = process.env.PASSWORD

let mysql = require('mysql2')

// Skapande av kontakt till databas
let db_con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: key,
    database: 'bookface'
})

/* db_con.connect((err) => {
    if (err) throw err
    console.log('Connected to database')
}) */

function getAllUsers() {
    return 'SELECT * FROM users'
}

function getAllMessages() {
    return 'SELECT * FROM messages'
}

function getAllCombined() {
    return 'SELECT * FROM messages INNER JOIN users on messages.userId = users.id;'
}

function getAllCombinedFiltered() {
    return 'SELECT users.name, messages.subject, messages.text FROM messages INNER JOIN users on messages.userId = users.id;'
}

function newUser() {
    let setName = 'Carl'
    let setAge = 25
    return `INSERT INTO users(name, age) VALUES ('${setName}' , ${setAge})`
}

function query_db(sql_string) {
    db_con.connect((err) => {
        if (err) throw err
        console.log('Connected to database')
        db_con.query(sql_string, (error, result, fields) => {
            if (error) throw error
            console.log(result)
        })
    })
}

// query_db(getAllUsers())
// query_db(getAllMessages())
// query_db(getAllCombined())
// query_db(getAllCombinedFiltered())

query_db(newUser())
query_db(getAllUsers())