const connection = require("./connection");


const orm = {
    selectAll: (table) => {
        let queryString = "SELECT * FROM ??";
        connection.query(queryString,[table], (err, result) => {
            if (err) throw err; 
            console.log(result);
        })
    }
// 'orm' object end here
};

module.exports = orm;