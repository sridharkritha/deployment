// https://www.tutorialsteacher.com/nodejs/expressjs-web-application

// Installation required:
// npm install express --save
// npm install body-parser --save

var request = require("request");
var express = require('express');
var app = express();

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function (req, res) {
	//res.send('<html><body><h1>Hello World</h1></body></html>');
    res.sendFile('index.html', {root: __dirname });
});

app.post('/submit-student-data', function (req, res) {
	//var name = req.body.firstName + ' ' + req.body.lastName;

	var credential = {};

	credential.username = req.body.firstName;
	credential.password = req.body.lastName;

	request.post(
		'https://api.matchbook.com/bpapi/rest/security/session',
		{ json: credential}, // username and passwords
		function (error, response, body) {
			if (!error && response.statusCode == 200) {
				sessionToken = body['session-token'];
				sessionStartTime = new Date().getTime();
				// console.log(sessionToken);
				// console.log(body);
				// return callback(null,sessionToken);
				 res.send(sessionToken + ' Submitted Successfully!' + JSON.stringify(body));
			}
			else {
				//return callback(error,null);
				res.send('Error!');
			}
		}
	);
});

/*
app.put('/update-data', function (req, res) {
    res.send('PUT Request');
});

app.delete('/delete-data', function (req, res) {
    res.send('DELETE Request');
});
*/
var port = process.env.PORT || 1239;
var server = app.listen(port, function () {
    console.log('Node server is running..');
});
