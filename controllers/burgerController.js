// Bring in express, our router, and ORM
const express = require("express");
const router = express.Router();
const orm = require("../config/orm");

// CRUD functions 

// CREATE
router.post("/api/burger", function(req, res) {
    const burger_name = req.body.burger_name;
    // here 'data' is the callback. Burger_name is what we are passing.
    orm.insertOne(burger_name, function(data) {

        if (data.affectedRows === 1) {
            res.json({
                msg: "Burger added!"
            })
        };
        console.log(data);
    });
  });

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
router.put("/api/burger/:id", function(req, res) {
    const id = req.params.id;
    // here 'data' is the callback. Burger_name is what we are passing.
    orm.updateOne(id, function(data) {

        if (data.affectedRows === 1) {
            res.json({
                msg: "Burger devoured!"
            })
        };
        console.log(data);
    });
  });

// DELETE



module.exports = router;