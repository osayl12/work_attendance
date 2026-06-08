const mysql = require("mysql2");
const params = require("./gen_params");

let pool = mysql.createPool({
  host: params.HOST,
  user: params.USER,
  password: params.PASSWORD,
  database: params.DATABASE,
  waitForConnections: true,
  connectionLimit: 25,
  maxIdle: 25,
  idleTimeout: 60000,
  queueLimit: 0,
  enableKeepAlive: true,
  keepAliveInitialDelay: 0,
});

if (pool !== undefined) {
  console.log("my sql pool created");
}

module.exports = { pool };
