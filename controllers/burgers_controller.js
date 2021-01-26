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

router.post('/api/burgers', (req,res) => {
  burger.create([
    req.body.burger_name, req.body.devoured
  ], (results) => {
    res.json({ id: results.insertId });
  });
});

router.put('/api/burgers/:id', (req, res) => {
 let id = req.params.id;

  burger.update(id, (result) => { 
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});


module.exports = router;