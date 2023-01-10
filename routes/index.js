var express = require('express');
var router = express.Router();
const testController = require('../controllers/test_controller');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/test', testController.test);

module.exports = router;
