console.log("Hello, we're using "+process.version+" at "+__dirname);
if( ! process.version=="v0.6.4")
	require.paths.unshift(__dirname+"/node_modules");

var express = require('express'),
    app = express.createServer();
    path = require('path');

//Static HTML files
app.configure(function(){
	app.use(express.static(path.normalize(__dirname+"/../client") ));
});

//Otherwise...
app.get('/', function(req, res){
	res.send("GoonBuggy: What what in yr cup?");	
});


var port = process.env.PORT || 5000;
app.listen(port);
