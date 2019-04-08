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

/*
OUTPUT:

1 Request from => /
2 Request from => /favicon.ico
{ timestamp: 1524282654000,
  market_price_usd: 8857.216666666667,
  hash_rate: 25956073041.228214,
  total_fees_btc: 2974017812,
  n_btc_mined: 170000000000,
  n_tx: 216660,
  n_blocks_mined: 136,
  minutes_between_blocks: 10.1333,
  totalbc: 1698996250000000,
  n_blocks_total: 519197,
  estimated_transaction_volume_usd: 1231765842.3251257,
  blocks_size: 121723605,
  miners_revenue_usd: 15320683.534647435,
  nextretarget: 520127,
  difficulty: 3839316899029,
  estimated_btc_sent: 13906917812689,
  miners_revenue_btc: 1729,
  total_btc_sent: 155231361544780,
  trade_volume_btc: 81743.21295715,
  trade_volume_usd: 724017348.1909516 }
{ timestamp: 1524282654000,
  market_price_usd: 8857.216666666667,
  hash_rate: 25956073041.228214,
  total_fees_btc: 2974017812,
  n_btc_mined: 170000000000,
  n_tx: 216660,
  n_blocks_mined: 136,
  minutes_between_blocks: 10.1333,
  totalbc: 1698996250000000,
  n_blocks_total: 519197,
  estimated_transaction_volume_usd: 1231765842.3251257,
  blocks_size: 121723605,
  miners_revenue_usd: 15320683.534647435,
  nextretarget: 520127,
  difficulty: 3839316899029,
  estimated_btc_sent: 13906917812689,
  miners_revenue_btc: 1729,
  total_btc_sent: 155231361544780,
  trade_volume_btc: 81743.21295715,
  trade_volume_usd: 724017348.1909516 }

*/
