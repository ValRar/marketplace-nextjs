const mysql = require("mysql")
// const dotenv = require("dotenv")
// dotenv.config()

const sqlClient = mysql.createConnection({
    host: process.env.SQL_HOST,
    user: process.env.SQL_USER,
    password: process.env.SQL_PASSWORD,
    database: process.env.SQL_DATABASE,
    port: process.env.SQL_PORT
})

export default sqlClient