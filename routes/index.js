var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'about' });
});

router.get('/about', function(req, res) {
  res.render('index', { title: 'about' });
});

router.get('/experiences', function(req, res) {
  res.render('index', { title: 'experiences' });
});

router.get('/resume', function(req, res) {
  res.render('index', { title: 'resume' });
});

module.exports = router;
