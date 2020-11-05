const request = require('request-promise')
const bodyParser = require('body-parser')

require('dotenv').config()


async function callSendAPI() {
	const messageData = {
		"channel": process.env.CHANEEL,
		"text": "TEST_MESSAGE",
		"as_user": false,
		"username": "TEST BOT"
	}

	return await request({
		uri: 'https://slack.com/api/chat.postMessage',
		auth: {
    		'bearer':process.env.TOKEN
    	},
		method: 'POST',
		json: messageData
	}).then(function (repos) {
		console.log(repos)
	}).catch(function (err) {
		console.log(err)
	});
}


callSendAPI()
