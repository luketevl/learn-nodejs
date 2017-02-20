const mysql = require('mysql');

const createDBConnection = () => mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'payment'
});


module.exports = () => createDBConnection;
