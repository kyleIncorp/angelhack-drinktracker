console.log("Hello, we're using "+process.version);
if( ! process.version=="v0.6.4")
	require.paths.unshift(__dirname+"/node_modules");


var app = require('express').createServer();

app.get('/', function(req, res){
	res.send("GoonBuggy: What what in y`r cup?");	
});


var port = process.env.PORT || 5000;
app.listen(port);
