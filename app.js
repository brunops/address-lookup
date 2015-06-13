var express = require('express');

var app = express();

app.set('views', './views');
app.set('view engine', 'jade');

app.get('/', function (req, res) {
  res.render('index', {});
});

app.listen(8080, function () {
  console.log('App listening on port 8080');
});

