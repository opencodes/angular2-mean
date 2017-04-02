var express = require('express');
var router = express.Router();
var User = require('../model/user')

function RespondBack(req, res, next){
  res.json(req.response);
}

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/login', User.login, RespondBack)

module.exports = router;
