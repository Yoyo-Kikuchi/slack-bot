const express = require('express');
const router = express.Router()
const bodyParser = require('body-parser')

router.use(bodyParser());

/* GET home page. */
router.post('/', async (req, res, next) => {
	console.log(req.body)
  	res.status(200);
});


module.exports = router;
