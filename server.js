var express = require('express');
var http = require('http');
var fs = require('fs');
var app = express();

// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 8080;

// set the view engine to ejs
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

// make express look in the public directory for assets (css/js/img)
app.use(express.static(__dirname + '/views'));

// set the home page route
app.get('/', function(req, res) {

    // ejs render automatically looks in the views folder
    res.render('index.html');
});

app.get('/.well-known/acme-challenge/:content', function(req, res) {
  res.send('84GNdBiPidL6EebGQg_bf5hKqRv0OppOLWqdFLyZErM.pX3nIJ5LXz_lhJIvv5mulPtJHkgBkw_tAvnorI3vKBs')
})

app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});