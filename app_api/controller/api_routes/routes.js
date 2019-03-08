var express = require('express');
var router = express.Router();
var apiController = require('../api_controllers/controllers')
var jwt = require('express-jwt');
var auth = jwt({
    secret: process.env.JWT_SECRET,
    userProperty: 'payload'
})

//homepage endpoints
router.get('/home',apiController.getAllEvents);
//guarded route basically checks that there is a valid token with it
router.post('/home',auth,apiController.createEvent);
//guarded route updates one card/event
router.put('/home/:eventID',auth,apiController.updateEvent);
//guarded route eliminates one card/event
router.delete('/home/:eventID', auth, apiController.deleteEvent);
//unguarded route to add a participant
router.put('/home/:eventID/addParticipant', apiController.addParticipant);


//authentication enpoints
router.post('/login', apiController.login);
router.post('/register',apiController.register);
module.exports= router;