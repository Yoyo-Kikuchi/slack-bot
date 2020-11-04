var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser')

router.use(bodyParser());

/* GET home page. */
router.post('/', function(req, res, next) {
	console.log(req.body.challenge)
  res.status(200).send(req.body.challenge);
});

module.exports = router;
