var mongoose = require('mongoose');
var Event= mongoose.model('Event');
var User = mongoose.model('User');
//niggi wtf
var passport = require('passport');

var sendJsonResponse= function(res, status, content){
    res.status(status);
    res.json(content);
}
module.exports.getAllEvents = function(req, res){
    //db.rooms.findOne({ "$query":{}, "$orderby":{ "_id": -1 }})
 Event.find({})
 .sort({ "_id": -1 })
 .exec(function(err, events){
     if(err){
         sendJsonResponse(res, 404, err);
         return;
     }
     sendJsonResponse(res,200,events);
 });
}

module.exports.addParticipant= function(req, res){
    if (!req.params.eventID) {
        sendJsonResponse(res, 404, {
            "message": "Not found, eventid is required"
        });
        return;
    }
    Event
        .findById(req.params.eventID)
        .exec(
            function (err, event) {
                if (!event) {
                    sendJsonResponse(res, 404, {
                        "message": "event not found"
                    });
                    return;
                } else if (err) {
                    sendJsonResponse(res, 400, err);
                    return;
                }
                event.eventParticipants=event.eventParticipants+req.body.participant;
                event.save(function (err, event) {
                    if (err) {
                        sendJsonResponse(res, 404, err);
                    } else {
                        sendJsonResponse(res, 200, event.eventParticipants);
                    }

                });
            }
        );
}
module.exports.updateEvent = function (req, res) {
    if (!req.params.eventID) {
        sendJsonResponse(res, 404, {
            "message": "Not found, eventid is required"
        });
        return;
    }
    Event
        .findById(req.params.eventID)
        .exec(
            function (err, event) {
                if (!event) {
                    sendJsonResponse(res, 404, {
                        "message": "event not found"
                    });
                    return;
                } else if (err) {
                    sendJsonResponse(res, 400, err);
                    return;
                }
                event.eventType = req.body.type;
                event.isNextEvent = req.body.isNextEvent;
                event.eventTitle = req.body.title;
                event.eventSubtitle=req.body.subtitle;
                event.eventParticipants=req.body.participants;
                event.eventDetails=req.body.details;
                event.save(function (err, event) {
                    if (err) {
                        sendJsonResponse(res, 404, err);
                    } else {
                        sendJsonResponse(res, 200, event);
                    }

                });
            }
        );
};

module.exports.deleteEvent= function (req, res) {
    var eventId = req.params.eventID;
    if (eventId) {
        Event
            .findByIdAndRemove(eventId)
            .exec(function (err, event) {
                if (err) {
                    sendJsonResponse(res, 404, { "message": "not fucking fojund i wwrote this one wubbalubbadubdbub" });
                    return;
                }
                sendJsonResponse(res, 204, { "message": "successfully removed" });
            });
    } else {
        sendJsonResponse(res, 404, {
            "message": "No eventId"
        });
    }
};

module.exports.createEvent = function(req, res){
    var event= new Event();
    // type:vm.type,
    // isNextEvent:vm.isNextEvent,
    // subtitle:vm.subtitle,
    // title:vm.title,
    // participants:vm.participants,
    // details:vm.details,
    //console.log('before req');
    //console.log(req);
    //console.log(req.payload);
    console.log(req.body);
    event.eventType=req.body.type;
    event.isNextEvent=req.body.isNextEvent;
    event.eventSubtitle=req.body.subtitle;
    event.eventTitle=req.body.title;
    event.eventParticipants=req.body.participants;
    event.eventDetails=req.body.details;

    //console.log("create event controller is running st 3");
    event.save(function(err){
        if(err){
            sendJsonResponse(res, 400, err);
        }else{
            sendJsonResponse(res, 200, {
                "saved":"event is saved"
            });
        }
    });
}

//authentication
//register controller
module.exports.register = function(req, res){
    if(!req.body.name || !req.body.email || !req.body.password){
        sendJsonResponse(res, 400,{"message": "All fields required"});
        return;
    }
     
    var user = new User();

    user.name = req.body.name;
    user.email = req.body.email;

    user.setPassword(req.body.password);

    user.save(function(err){
        var token;
        if(err){
            sendJsonResponse(res, 404, err);
        }else{
            token = user.generateJWT();
            sendJsonResponse(res, 200, {"token":token});
        }
    });
};

//login controller
module.exports.login = function(req, res,next){
    if(!req.body.email || !req.body.password){
        sendJsonResponse(res, 400, {"message": "all felids required"});
        return;
    }
    //auth with passport
    passport.authenticate('local', function(err, user, info){
        var token;
        if(err){
            sendJsonResponse(res, 404, err);
            return;
        }

        if(user){
            token = user.generateJWT();
            sendJsonResponse(res, 200, {"token":token});
        }else{
            sendJsonResponse(res, 401, {"info":info,message:"this means !user is running"});
        }
    })(req, res,next);
};