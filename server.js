// Require packages 
const express = require("express");

// Import connection
const connection = require("./config/connection");
// Bring in ORM
const orm = require("./config/orm");

//Test ORM 
orm.selectAll("burgers");

