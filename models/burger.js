// Import ORM 
const orm = require("../config/orm");


const burger = {
    all: function(cb) {
        orm.selectAll(function(res) {
          cb(res);
        });
      },
    create: function(value, cb) {
        orm.insertOne("cats", function(res) {
          cb(res);
        });
      },
    
    







}