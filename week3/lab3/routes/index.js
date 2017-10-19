var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Lab 3' });
});

//router.post('/form', function(req, res, next) {
    
//};

module.exports = router;
