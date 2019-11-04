var mongoose = require('mongoose');

var dbUri = "mongodb://localhost/coolmine-footballers";
//process.env.NODE_ENV= 'production';
if (process.env.NODE_ENV === 'production') {
    dbUri = 'mongodb://el-nico:123%40abc2@ds125125.mlab.com:25125/footballerscloud';
}

mongoose.connect(dbUri, { useNewUrlParser: true });

//this is to enable windows fire sigint events
//which can be captured to enable db gracefully shutdown
var readLine = require("readline");
if (process.platform === "win32") {
    var rl = readLine.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    rl.on("SIGINT", function () {
        process.emit("SIGINT");
    });
}

//shutdown function
var shutdown = function (msg, callback) {
    //close the connec
    mongoose.connection.close(function () {
        console.log("kahu agala " + msg)
        callback();
    })
}

//listen for app close events
//and close db accordingly

//nodemon
process.once('SIGUSR2', function () {
    shutdown('nodemon restart', function () {
        process.kill(process.pid, 'SIGUSR2');
    });
});

//windows
process.on('SIGINT', function () {
    shutdown('app termination', function () {
        process.exit(0);
    });
});

//heroku
process.on('SIGTERM', function () {
    shutdown('Heroku app shutdown', function () {
        process.exit(0);
    });
});

//some connec events
mongoose.connection.on('connected', function () {
    console.log('obago la ' + dbUri);
});

mongoose.connection.on('error', function (err) {
    console.log('ono na lookwell ' + err);
});

mongoose.connection.on('disconnected', function () {
    console.log("akupulam");
});

require("./schemas/eventsSchema.js");
require("./schemas/users.js");