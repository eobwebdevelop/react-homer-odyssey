const mysql      = require('mysql');

// From now on, the database connector will be available from any file via:
// const connection = require('./helpers/db.js');

const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'newOne123.',
  database : 'homer'
});
module.exports  =  connection;