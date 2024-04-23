const mysql = require("mysql");
const connectionMySQL = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "new_password",
  database: "webbserver",
});

module.exports = connectionMySQL;
