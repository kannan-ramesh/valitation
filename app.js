console.log("enter project");
var express = require('express');
var path = require("path");

var app = express();
var Controller = require('./controller/controller');
app.set('view engine','ejs');
app.use(express.static('./public'));
Controller(app);
app.listen(4000);
console.log('app listen 4000');