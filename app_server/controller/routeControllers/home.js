
module.exports.homeCtrl=function(req, res, next) {
    res.render('home', {
        events:[
            {
                eventType: "ordinary",
                isNextEvent:true,
                eventTitle:"football(+glyphicon)",
                eventDate: "sunday feb 17 2019",
                eventTypeSubtitle:"eventDetails",
                eventDetails:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam quas sequi cupiditate minus dicta. Nemo possimus repellat natus alias? Est, veniam. Perspiciatis fuga nulla saepe possimus laboriosam odio sunt praesentium?"
            },
            {
                eventType: "ordinary",
                isNextEvent:false,
                eventTitle:"football(+glyphicon)",
                eventDate: "sunday feb 17 2019",
                eventTypeSubtitle:"eventDetails",
                eventDetails:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam quas sequi cupiditate minus dicta. Nemo possimus repellat natus alias? Est, veniam. Perspiciatis fuga nulla saepe possimus laboriosam odio sunt praesentium?"
            },
            {
                eventType: "announcement",
                isNextEvent:false,
                eventTitle:"Announcement(+glyphicon)",
                eventDate: "sunday feb 17 2019",
                eventTypeSubtitle:"announcementDetails",
                eventDetails:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam quas sequi cupiditate minus dicta. Nemo possimus repellat natus alias? Est, veniam. Perspiciatis fuga nulla saepe possimus laboriosam odio sunt praesentium?"
            },
            {
                eventType: "ordinary",
                isNextEvent:false,
                eventTitle:"football(+glyphicon)",
                eventDate:"sunday feb 17 2019",
                eventTypeSubtitle:"eventDetails",
                eventDetails:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam quas sequi cupiditate minus dicta. Nemo possimus repellat natus alias? Est, veniam. Perspiciatis fuga nulla saepe possimus laboriosam odio sunt praesentium?"
            },
            {
                eventType: "ordinary",
                isNextEvent:false,
                eventTitle:"football(+glyphicon)",
                eventDate: "sunday feb 17 2019",
                eventTypeSubtitle:"eventDetails",
                eventDetails:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam quas sequi cupiditate minus dicta. Nemo possimus repellat natus alias? Est, veniam. Perspiciatis fuga nulla saepe possimus laboriosam odio sunt praesentium?"
            }
        ]
    });
}