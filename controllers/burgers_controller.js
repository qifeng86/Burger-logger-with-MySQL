const express = require("express");
const burger = require("../models/burger.js");


// Create an instance of the express app.
const router = express();

//create routes//
router.get('/', function (req, res) {
    burger.selectAll(function (data) {
        res.render('index', { burgers: data });
    });
});

router.post('/api/burgers', function (req, res) {
    burger.insertOne(req.body.burger_name, function () {
        res.redirect('index');
    });
});


router.put('/api/burgers/:id', function (req, res) {
    burger.updateOne(req.params.id, function () {
        res.redirect('index');
    });
});

//export the router at the end of your file//
module.exports = router;