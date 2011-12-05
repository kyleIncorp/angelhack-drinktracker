console.log("Hello, we're using "+process.version+" at "+__dirname);
if( ! process.version=="v0.6.4")
	require.paths.unshift(__dirname+"/node_modules");

var express = require('express'),
    app = express.createServer();
    path = require('path');
    jade = require('jade');
    OAuth = require('oauth').OAuth;
    dateFormat = require('dateformat');

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

//Process daily drink report
app.post('/dailyDrinkReport', function(req, res){
	//Parse the JSON string report
	report = JSON.parse(req.body.report_json);
	for(drink in report){
		report[drink].timeFormat = dateFormat(new Date(t), "dddd, h:MM TT");
	}

	console.log(report);
	emailAddress = req.body.email;
	console.log("send report to "+emailAddress);
	email = jade.renderFile('views/email.jade', report, function(err, html){
		console.log(html);
	});
});

var port = process.env.PORT || 5000;
app.listen(port);

//securer.get('http://api.v3.factual.com/t/places?filters={"category":"Food%20%26%20Beverage"}&geo={"$circle":{"$center":[37.779331,-122.419131],"$meters":500}}',
//			null,
//	    null,
//	    function (err, data, result) {
//				console.log("Got response: "+data);
//   	});
