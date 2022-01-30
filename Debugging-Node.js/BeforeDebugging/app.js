var express = require('express');
var expressHandlebars = require('express-handlebars');
var http = require('http');

var PORT = 8000;

var LINES = [
    "Do the thing you think you cannot do.",
    "Do the thing you are afraid to do.",
    "Doubt kills more dreams than failure ever will",
    "Stay hungry; stay foolish.",
];

var lineIndex = 0;

var app = express();
app.engine('hbs', expressHandlebars({defaultLayout: false,
    }));
app.set('view engine', 'hbs');
app.set('views', __dirname);
app.get('/', function(req, res) {
    var message = LINES[lineIndex];

    lineIndex += 1;
    if (lineIndex >= LINES.length) {
        lineIndex = 0;
    }

    res.render('index', {message: message});
});

// http.Server(app)
app.listen(PORT, function() {
    console.log("HTTP server listening on port %s", PORT);
});