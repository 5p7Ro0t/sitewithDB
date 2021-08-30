"use strict";

var express = require("express");

var path = require('path');

var bodyparser = require('body-parser');

var mongoose = require('mongoose');

var app = express();
var host = 'localhost';
var port = 80;
app.use(express.urlencoded({
  extended: true
}));
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views')); //Database Settings

mongoose.connect('mongodb://localhost:27017/spandan', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
var schema = new mongoose.Schema({
  name: String,
  price: Number,
  qty: Number,
  sold: Number
});
var table = mongoose.model('table', schema);
table.find({
  name: 'Iphone 11'
}, function (err, tables) {
  if (err) return console.error(err);
  console.log(tables);
}); // let tables = table.find({name:'Iphone 11'});
// console.log(tables);
//SiteMap

app.get('/', function (req, res) {
  res.render('index.pug');
  res.status(200);
});
app.post('/', function (req, res) {
  var data = new table(req.body);
  data.save().then(function () {
    res.send('Success').status(200);
  }); //console.log(res.body);
}); //Listen the server

app.listen(port, host, function () {
  console.log("Listening...");
});