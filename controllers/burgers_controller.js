const express = require("express");
const burger = require("../models/burger");

const router = express.Router();

router.get('/', (req,res) => {
  burger.all((data) => {
    const hbsObject = {
      burgers: data
    };
    res.render("index", hbsObject);
  });
});

router.post('/api/burgers', (req,rest) => {
  burger.create([
    "name", "devoured"
  ], [
    req.body.burger_name, req.body.devoured
  ], (results) => {
    res.json({ id: results.insertId });
  });
});


module.exports = router;