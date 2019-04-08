/*
var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  res.write('Hello World!'); //write a response to the client
  res.end(); //end the response
}).listen(process.env.PORT ||80); //the server object listens on port 8080
*/

var http = require("http");
// request is similar like curl which can be used 
// to pull the content from external website
var request = require("request"); // npm install request --save

// Create a quick web server in nodejs
http.createServer(function(req, res)
{

	// Using request(kind of curl) pull the content from 
	// blockchain.info website
	request({
			url:"https://blockchain.info/stats?format=json",
			json: true
		}, function(error, response, body){

		// print the pulled body content
		//console.log(body);
		res.end(JSON.stringify(body));
	});

	/*
	// 1. Run locally
	// Run the webserver => node createWebserver.js
	// Request the webserver from browser => localhost:1234

	//2. Run remotely - Heroku
	//-----------------------
	1. mkdir demo -> cd demo -> npm init -fy (creats package.json)
	2. npm i request --save (add dependecy(request module details) to package.json)
	3. Inside package.json, configure the start program inside "scripts" 
	"scripts": {
		"start": "node hello.js"
	  },

	4. commit the changes to 'your' git repo.
	----------------------------------------------
	5. heroku login 
	6. heroku create
	7. git push heroku master (push the project to heroku for deployment)
	8. heroku open

	// ref: https://medium.com/@grantspilsbury/build-and-deploy-a-node-express-server-to-heroku-in-10-steps-70c936ab15dc

	*/



	// process.env.PORT  - Heroku
	// 1234 - local server
}).listen(process.env.PORT ||1234); //the server object listens on port 8080
