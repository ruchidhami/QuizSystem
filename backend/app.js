"use strict";
var express = require('express');
var path = require('path');
var fs = require('fs');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cors = require('cors');
// var passport = require('passport');
//var json = require('json-validation');
// var LocalStrategy = require('passport-local').Strategy;

var mongo = require('mongodb');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/quizDatabase');
var db = mongoose.connection;

// Init App
var app = express();

app.use(cors());
app.options('*', cors());

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cookieParser());


// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

// Passport init
// app.use(passport.initialize());
// app.use(passport.session());

var routersPath = path.join (__dirname, "routes");
fs.readdirSync(routersPath).forEach(function (file) {
  app.use(require("./routes/" + file));
});

require('./services/setupSuperAdmin').setup();

// Set Port
app.set('port', (process.env.PORT || 3000));

app.get('/', function (req, res) {
  res.send("hello world");
})

app.listen(app.get('port'), function(){
  console.log('Server started on port '+app.get('port'));
});