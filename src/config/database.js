require("dotenv").config();

const mysql = require("mysql2/promise");

// connect to DB
// const connection = mysql.createConnection({
//     //process.env. tự động convert sang string
//     host: process.env.DB_HOST,
//     user: process.env.DB_USER,
//     database: process.env.DB_NAME,
//     port: process.env.DB_PORT,
//     password: process.env.DB_PASSWORD,
// });

const connection = mysql.createPool({
  //process.env. tự động convert sang string
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
    password: process.env.DB_PASSWORD,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

module.exports = connection;
