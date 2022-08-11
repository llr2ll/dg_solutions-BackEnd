const mysql = require("mysql2/promise")
require('dotenv').config()

const pool = mysql.createPool({
	host: `${process.env.host}`,
	user: `${process.env.user}`,
	password: `${process.env.password}`,
	port: 3306,
	database: `${process.env.database}`,
	ssl: {"rejectUnauthorized":true} 
})

module.exports = pool
