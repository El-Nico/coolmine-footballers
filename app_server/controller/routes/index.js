var express = require('express');
var router = express.Router();
var home = require('../routeControllers/home');
var about= require('../routeControllers/about');

//homepage
router.get('/', home.homeCtrl);

//about page
router.get('/about', about.aboutCtrl);


module.exports = router;
