var express = require('express'),
    geoTools = require('geo-tools');

var app = express();

app.set('views', './views');
app.set('view engine', 'jade');

app.use(express.static('./public'));

app.get('/', function (req, res) {
  res.render('index', {});
});

app.get('/address-lookup', function (req, res) {
  // res.end();
  geoTools.reverseGeocode({ lat: req.query.lat, lng: req.query.lng }, function(address) {
    res.json(address);
  });

});

app.listen(8080, function () {
  console.log('App listening on port 8080');
});

