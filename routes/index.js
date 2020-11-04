var express = require('express');
var router = express.Router()
const request = require('request')
const bodyParser = require('body-parser')

router.use(bodyParser());

/* GET home page. */
router.post('/', function(req, res, next) {
	console.log(req.body)
  	res.status(200);
});



// function callSendAPI(messageData, callback) {
// 	const messageData = {
// 		"channel": "",
// 		"text": "Hello world"
// 	}
// z
// 	request({
// 		uri: 'https://slack.com/api/chat.postMessage',
// 		qs: { access_token: token },
// 		method: 'POST',
// 		json: messageData
// 	}, function (error, response, body) {
// 		if (!error && response.statusCode == 200) {
// 	  		if(callback != null) callback(null)
// 		} else {
// 	  	if(callback != null) callback(error)
// 		}
// 	});
// }

module.exports = router;
