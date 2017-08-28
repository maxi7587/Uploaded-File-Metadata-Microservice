// server.js

// init project
var express = require('express');
var multer = require('multer');
var storage = multer.memoryStorage();
var upload = multer({storage: storage});
var app = express();

app.use(express.static('public'));

app.post('/', upload.single('file'), function(req, res, next) {
  var result = {size: req.file.size};
  res.send(result);
});

app.use('/', function(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
