console.log("Hello, we're using "+process.version+" at "+__dirname);
if( ! process.version=="v0.6.4")
	require.paths.unshift(__dirname+"/node_modules");

var express = require('express'),
    app = express.createServer();
    path = require('path');
    jade = require('jade');
    OAuth = require('oauth').OAuth;

var factualKey = "Jrc8vygPg8kBgAaAjIcnAopBVuTWaPRlImiu8iI4";
var factualSecret = "6EP11yubg2OzX0lMEvOQC0pnN18qraC28bDpqZpz";
var securer = new OAuth(null, null, factualKey, factualSecret,'1.0', null,'HMAC-SHA1');


//Static HTML files
app.configure(function(){
	app.use(express.static(path.normalize(__dirname+"/../client") ));
	app.use(express.bodyParser());
	app.set('view engine', 'jade');
	app.set('view options', {layout: false});
});

//Otherwise...
app.post('/dailyDrinkReport', function(req, res){
	report = JSON.parse(req.body);
	console.log(req.body);
	console.log(report);
	email = jade.renderFile('views/email.jade', req.body, function(err, html){
		console.log(html);
	});
});

var port = process.env.PORT || 5000;
app.listen(port);

//securer.get("http://api.v3.factual.com/t/places",
//	    null,
//	    null,
//	    function (err, data, result) {
//		console.log(data);
//	    });
