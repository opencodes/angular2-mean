var express = require('express');
var router = express.Router();
var post = require('../model/post');

function RespondBack(req, res, next){
  res.json(req.response);
}
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/post', post.ListPost, RespondBack);
router.post('/post', post.InsertPost, RespondBack);

module.exports = router;
