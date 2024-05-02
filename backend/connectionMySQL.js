const mysql = require("mysql");
const connectionMySQL = mysql.createConnection({
  host: "localhost",
  user: "rootuser",
  password: "sitar123",
  database: "webbproject",
  // port: 3306,
});

module.exports = connectionMySQL;
