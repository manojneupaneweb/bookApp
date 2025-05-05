const express = require("express");
const { getbook } = require('../controller/book.controller'); 

const router = express.Router();

router.get("/", getbook);

module.exports = router; 
 
