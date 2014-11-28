var express = require('express');
var router = express.Router();

router.use('/', function(req, res, next){
  //actions here...
  console.log('actions');
  next();
});

/* GET users listing. */
router.get('/', function(req, res) {
  res.send('respond with a resource');
});

module.exports = router;
