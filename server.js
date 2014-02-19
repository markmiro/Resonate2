var express = require('express');
var app = express();

// app.use(express.static(__dirname));

app.configure(function() {
  app.use('/', express.static(__dirname + '/'));
});

app.get('*', function(request, response, next) {
  response.sendfile(__dirname + '/index.html');
});

app.listen(8080);
