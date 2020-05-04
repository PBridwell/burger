const connection = require("./connection");


const orm = {
    selectAll: function(cb) {
        var queryString = "SELECT * FROM burgers";
        connection.query(queryString, function(err, result) {
          if (err) throw err;
          cb(result);
        });
      },
      insertOne: function(value, cb) {
        var queryString = "INSERT INTO burgers (burger_name) VALUES(?)";
        connection.query(queryString, value, function(err, result) {
          if (err) throw err;
          cb(result);
        });
      },
      updateOne: function(id, cb) {
        var queryString = "UPDATE burgers SET devoured = 1 WHERE id = ?";
        connection.query(queryString, id, function(err, result) {
          if (err) throw err;
          cb(result);
        });
      }
    
// 'orm' object end here
};

module.exports = orm;