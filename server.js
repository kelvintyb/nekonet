var path = require('path');
var express = require('express');

var app = express();

app.use(express.static(path.join(__dirname, '/public')));

app.get('/*', function(req, res){
  res.sendfile("index.html", {root: path.join(__dirname, '/public')});
});

app.listen(process.env.PORT || 3000)
