var express = require('express');
var router = express.Router();
var home = require('../routeControllers/home');

/* GET home page. */
router.get('/', home.homeCtrl);


module.exports = router;
