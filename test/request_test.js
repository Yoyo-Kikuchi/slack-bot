const request = require('request-promise')
const bodyParser = require('body-parser')

require('dotenv').config()


const message = {
	chaneel: "",
	text: "",
}


async function callSendAPI() {
	const messageData = {
		"channel": message.chaneel,
		"text": message.text
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


const response = callSendAPI()
console.log(response)