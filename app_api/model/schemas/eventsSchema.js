var mongoose =require('mongoose');
//an individual comment
var commentSchema= mongoose.Schema({
    name:{type:String, required:true},
    comment:{type:String, required:true},
});

var eventsSchema = mongoose.Schema({
    eventType:{type:String, required:true},
    isNextEvent:{type:Boolean},
    eventSubtitle:{type:String, required:true},
    eventTitle:{type:String, required:true},
    eventParticipants:{type:String, required:true},
    eventDetails:{type:String},
    //comments:[commentSchema]
});

module.exports=mongoose.model('Event', eventsSchema, 'Events');