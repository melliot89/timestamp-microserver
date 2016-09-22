var express = require('express');
var moment = require('moment');
var app = express();

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.get('/:timestamp', function(req, res) {
  var timestamp = moment(req.params.timestamp);
  if (isNaN(timestamp)) {
    res.json({ "unix": null, "natural" : null });
  }
  res.json({ "unix": timestamp.unix(), "natural" : timestamp.format("dddd, MMMM Do YYYY, h:mm:ss a") });
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
