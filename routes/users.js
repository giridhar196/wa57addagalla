var express = require('express');
var router = express.Router();
var incValue = 0;

/* GET users listing. */
router.get('/', function (req, res, next) {
  incValue = incValue + 1;
  res.send('User accesses are: '+incValue);
});

module.exports = router;