var mysql      = require('mysql');

var connection = mysql.createConnection({
  host     : "localhost",
  port     : "3306",
  user     : "root",
  password : "Shlu3467",
  database : "renova"
});

module.exports = connection;
