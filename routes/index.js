var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Taletree', message: 'im okayyyy, just here in ze simulation, hbu?' });
});

module.exports = router;
