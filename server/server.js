console.log("Hello, we're using "+process.version+" at "+__dirname);
if( ! process.version=="v0.6.4")
	require.paths.unshift(__dirname+"/node_modules");

var express = require('express'),
    app = express.createServer();
    path = require('path');
    jade = require('jade');

//Static HTML files
app.configure(function(){
	app.use(express.static(path.normalize(__dirname+"/../client") ));
	app.use(express.bodyParser());
	app.set('view engine', 'jade');
	app.set('view options', {layout: false});
});

//Otherwise...
app.post('/dailyDrinkReport', function(req, res){
	console.log(req.body);
	//Neat! req.body.* contains everything we need
	//jade template and sendgrid
	email = jade.renderFile('views/email.jade', {}, function(err, html){
		console.log(html);
	});
});

var port = process.env.PORT || 5000;
app.listen(port);
