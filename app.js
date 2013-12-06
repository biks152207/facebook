
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');
var fs=require('fs');
var User = require('./models/User.js');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', function(req, res) {
fs.readFile('./form.html', function(error, content) {
if (error) {
res.writeHead(500);
res.end();
}
else {
res.writeHead(200, { 'Content-Type': 'text/html' });
res.end(content, 'utf-8');
}
});
});
app.post('/logining', function(req, res) {
var username = req.body.email;
var password = req.body.pass;
User.addUser(username, password, function(err, user) {
	
	console.log(user);
res.redirect('/');
});
});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
