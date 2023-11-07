var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  const minutes = Math.floor(process.uptime() / 60);
  res.render('index', { title: 'TEST APP' , time: minutes });
});

module.exports = router;
