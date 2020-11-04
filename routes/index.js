var express = require('express');
var router = express.Router()
const request = require('request')
const bodyParser = require('body-parser')
require('dotenv').config()

router.use(bodyParser());

/* GET home page. */
router.post('/', async (req, res, next) => {
	console.log(req.body)
	try {
		await callSendAPI(req.body)
	} catch(e){
		console.log(e)
	}
  	res.status(200);
});



async function callSendAPI(message) {
	const messageData = {
		"channel": message.event.channel,
		"text": message.event.text
	}

	return await request({
		uri: 'https://slack.com/api/chat.postMessage',
		auth: {
    		'bearer':process.env.TOKEN
    	},
		method: 'POST',
		json: messageData
	});
}

module.exports = router;
