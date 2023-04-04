const mysql = require("mysql")
const dotenv = require("dotenv")
dotenv.config()

const sqlClient = mysql.createConnection({
    host: "localhost",
    user: process.env.SQL_USER,
    password: process.env.SQL_PASSWORD,
    database: process.env.SQL_DATABASE
})

export default sqlClient