// https://www.tutorialsteacher.com/nodejs/expressjs-web-application

// Installation required:
// npm install express --save
// npm install body-parser --save

var express = require('express');
var app = express();

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function (req, res) {
	//res.send('<html><body><h1>Hello World</h1></body></html>');
    res.sendFile('index.html', {root: __dirname });
});

app.post('/submit-student-data', function (req, res) {
    var name = req.body.firstName + ' ' + req.body.lastName;
    
    res.send(name + ' Submitted Successfully!');
});

/*
app.put('/update-data', function (req, res) {
    res.send('PUT Request');
});

app.delete('/delete-data', function (req, res) {
    res.send('DELETE Request');
});
*/

var server = app.listen(1239, function () {
    console.log('Node server is running..');
});
