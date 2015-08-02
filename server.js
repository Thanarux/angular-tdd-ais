var express = require('express');
var cors = require('cors');

var app = express();
app.use(cors());

var contacts = [
	{ name: 'Ball Weera Kasetsin'},
	{ name: 'Dean Salah' }
];

app.get('/contacts', function(request, response){
	response.status(200).json(contacts);
});

var server = app.listen(9001, function(){
	var host = server.address().address;
	var port = server.address().port;
	console.log('Contactical API Server Started at port %s', port);
});