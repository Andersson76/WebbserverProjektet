const mysql = require("mysql");
const connectionMySQL = mysql.createConnection({
  host: "localhost",
  user: "rootuser",
  password: "sitar123",
  database: "webbprojekt",
  // port: 3306,
});

module.exports = connectionMySQL;
