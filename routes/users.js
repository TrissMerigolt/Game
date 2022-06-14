var express = require('express');
var router = express.Router();

const { getName } = require("../services/user.service");

router.get('/', function(req, res, next) {
    res.send(`Welcome!`);
});

router.post('/', function(req, res, next) {
    const result = getName(req.body);

    if (result) {
        res.send(`Your name is ${result}`);
    } else {
        res.status(400).send(`Some error`);
    }
});

module.exports = router;
