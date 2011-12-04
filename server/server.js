console.log("Hello, we're using "+process.version+" at "+__dirname);
if( ! process.version=="v0.6.4")
	require.paths.unshift(__dirname+"/node_modules");

var app = require('express').createServer();

//Static HTML files
app.configure(function(){
	app.use(express.static(__dirname + '../client'));
});

app.get('/', function(req, res){
	res.send("GoonBuggy: What what in yr cup?");	
});


var port = process.env.PORT || 5000;
app.listen(port);
