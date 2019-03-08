
module.exports.homeCtrl=function(req, res, next) {
    res.render('home', {
        events:[
            {
                eventType: "football",
                isNextEvent:true,
                eventTitle:"football",
                eventDate: "sunday feb 17 2019",
                eventVenue:"Coolmine sports and leisure centre",
                eventDetails:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam quas sequi cupiditate minus dicta. Nemo possimus repellat natus alias? Est, veniam. Perspiciatis fuga nulla saepe possimus laboriosam odio sunt praesentium?",
                participants:[
                    "Connor","iphi","ceph","tamu","elder Ropo","Abel","Nico","caddy","alex","axel"
                ]
            },
            {
                eventType: "football",
                isNextEvent:false,
                eventTitle:"football",
                eventDate: "sunday feb 17 2019",
                eventVenue:"Coolmine sports and leisure centre",
                eventDetails:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam quas sequi cupiditate minus dicta. Nemo possimus repellat natus alias? Est, veniam. Perspiciatis fuga nulla saepe possimus laboriosam odio sunt praesentium?",
                participants:[
                    "Connor","iphi","ceph","tamu","elder Ropo","Abel","Nico","caddy","alex","axel"
                ]
            },
            {
                eventType: "announcement",
                isNextEvent:false,
                eventTitle:"Announcement(+glyphicon)",
                eventDate: "sunday feb 17 2019",
                eventVenue:"Coolmine sports and leisure centre",
                eventDetails:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam quas sequi cupiditate minus dicta. Nemo possimus repellat natus alias? Est, veniam. Perspiciatis fuga nulla saepe possimus laboriosam odio sunt praesentium?"
            },
            {
                eventType: "football",
                isNextEvent:false,
                eventTitle:"football",
                eventDate:"sunday feb 17 2019",
                eventVenue:"Coolmine sports and leisure centre",
                eventDetails:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam quas sequi cupiditate minus dicta. Nemo possimus repellat natus alias? Est, veniam. Perspiciatis fuga nulla saepe possimus laboriosam odio sunt praesentium?",
                participants:[
                    "Connor","iphi","ceph","tamu","elder Ropo","Abel","Nico","caddy","alex","axel"
                ]          
            },
            {
                eventType: "football",
                isNextEvent:false,
                eventTitle:"football",
                eventDate: "sunday feb 17 2019",
                eventVenue:"Coolmine sports and leisure centre",
                eventDetails:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam quas sequi cupiditate minus dicta. Nemo possimus repellat natus alias? Est, veniam. Perspiciatis fuga nulla saepe possimus laboriosam odio sunt praesentium?",
                participants:[
                    "Connor","iphi","ceph","tamu","elder Ropo","Abel","Nico","caddy","alex","axel"
                ]            
            }
        ]
    });
}