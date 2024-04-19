const mysql = require("mysql");
const connectionMySQL = mysql.createConnection({
  host: "localhost",
  user: "rootuser",
  password: "new_password",
  database: "nodeExample",
});

module.exports = connectionMySQL;
