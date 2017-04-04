var express = require('express');
var router = express.Router();
var post = require('../model/post');

function RespondBack(req, res, next){
  // Domain you wish to allow
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
  // Set to true if you need the website to include cookies in  requests
  res.setHeader('Access-Control-Allow-Credentials', true);

  res.json(req.response);
}
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/post', post.ListPost, RespondBack);
router.post('/post', post.InsertPost, RespondBack);

module.exports = router;
