const express = require("express");

const router = express.Router();

const orm = require("../config/orm");

// CRUD functions 

// CREATE

// READ

router.get("/", function(req, res) {
    orm.selectAll(function(data) {
        console.log(data);
        res.json(data);
    //   var hbsObject = {
    //     cats: data
    //   };
    //   console.log(hbsObject);
    //   res.render("index", hbsObject);
    });
  });
  

// UPDATE

// DELETE



module.exports = router;