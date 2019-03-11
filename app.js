require('dotenv').load();
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var uglifyJs = require("uglify-js");
var logger = require('morgan');
var fs = require('fs');
var passport = require('passport');
require('./app_api/model/dbConfig');
require('./app_api/config/passport');

//var indexRouter = require('./app_server/controller/routes/index');
var apiRouter = require('./app_api/controller/api_routes/routes');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, '/app_server/view'));
app.set('view engine', 'jade');

var appClientFiles = [
  fs.readFileSync('app_client/app.js', "utf8"),
  fs.readFileSync("app_client/services/authentication.service.js", "utf8"),
  fs.readFileSync('app_client/directives/navigation/navigation.directive.js', "utf8"),
  fs.readFileSync('app_client/directives/navigation/navigation.controller.js', "utf8"),
  fs.readFileSync('app_client/directives/carousel/carousel.directive.js', "utf8"),
  fs.readFileSync('app_client/directives/footergen/footergen.directive.js', "utf8"),
  fs.readFileSync('app_client/directives/footergen/footergen.controller.js', "utf8"),
  fs.readFileSync('app_client/register/register.controller.js', "utf8"),
  fs.readFileSync('app_client/login/login.controller.js', 'utf8'),
  fs.readFileSync('app_client/createEvent/createEvent.controller.js', 'utf8'),
  fs.readFileSync('app_client/home/home.controller.js', 'utf8'),
  fs.readFileSync('app_client/directives/card/card.directive.js', 'utf8'),
  fs.readFileSync('app_client/directives/card/card.controller.js', 'utf8'),
];
var uglified = uglifyJs.minify(appClientFiles, { compress: false });

fs.writeFile('public/angular/footballers.min.js', uglified.code, function (err) {
  if (err) {
      console.log(err);
  }
  else {
      console.log('Script generated and saved: footballers.min.js');
  }
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'app_client')));


//index router commented out because
//ang app
//app.use('/', indexRouter);
//passport should be initialized here cos
//it will be needed for api auth
app.use(passport.initialize());
app.use('/api',apiRouter);

//the reason why this works even its so generic is
//because the rest middleware below are error 
//handlers and ang app can handle its own errors
//basically a well take it from here line
//ANG APP PLACED BEFORE ERROR HANDLERS
app.use(function(req, res){
  res.sendFile(path.join(__dirname, 'app_client', 'index.html'));
})

//place this before generic error handlers
//to catch route guard errors
//catch unauthorized error
app.use(function(err, req, res, next){
  if(err.name==='UnauthorizedError'){
    res.status(401);
    res.json({"message" : err.name + ": "+ err.message});
  }
})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
