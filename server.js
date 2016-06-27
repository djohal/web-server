var express = require('express');
var app = express();
var PORT = 3000;

var middleware = {
    requireAuthentication: function (req, res, next) {
        console.log('Private route hit!');
        next();
    },
    logger: function (req, res, next) {
        var date = new Date(yyyy-mm-dd);
        console.log('Request: ' + req.method + ' ' + req.originalUrl + ' ' + date);
        next();
    }
}

app.use(middleware.logger);

app.get('/about', middleware.requireAuthentication, function (req, res) {
    res.send('About Us !');
})

app.use(express.static(__dirname + '/public'));

app.listen(3000, function () {
    console.log('Express server started at ' + PORT + '!');
});