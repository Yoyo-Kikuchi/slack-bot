var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/', function(req, res, next) {
  res.status(200).send(req.challenge);
});

module.exports = router;
