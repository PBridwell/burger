
const mysql = require("mysql");
const connection = mysql.createConnection(process.env.JAWSDB_URL || {
    host: "localhost",
  
    // Your port; if not 3306
    port: 3306,
  
    // Your username
    user: process.env.USER_NAME,
  
    // Your password
    password: process.env.USER_PWD,
    database: "burgers_db"
  });
  
  // connect to the mysql server and sql database
  connection.connect(function(err) {
    if (err) throw err;
    // run the start function after the connection is made to prompt the user
    console.log("mysql connect ok");
  });

  module.exports = connection;