var express = require('express');
var router = express.Router();

router.get('/form', function(req, res, next) {
    
    var msg = '';
    if (req.query.empty === 'true') {
        msg = 'Please enter a value';
    }
  res.render('form', { title: 'Form Page', message: msg });
}).post('/form', function(req, res, next) {
   if (req.method === 'POST' && req.body.author.length) {
       
        next();
        
    } else {
       res.render('form', { title: 'Form Page', message: 'Please enter a value' });
    }   
}).post('/form', function(req, res, next) {
   if (req.method === 'POST' && req.body.author.length) {
       res.render('results', { 
            title : 'Form Post Page',
            author: req.body.author
        });   
        
    } else {
        res.redirect('/form?empty=true');
      
    }   
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
