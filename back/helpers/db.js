const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'watermelon1',
  database : ''
});
module.exports  =  connection;