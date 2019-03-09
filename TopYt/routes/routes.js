var express = require('express');

var router = express.Router();
var path = require('path');

var dbcon = require("../dbmodule");
/* GET home page. */
router.get('/', function (req, res, next) {
  res.sendFile(path.join(__dirname + '/../index.html'));
});


router.get('/login', function (req, res) {
  dbcon.getThings(10, res);
});
router.get('/home', function (req, res) {
  res.set('Content-Type', 'text/plain');
  res.send('Welcome');
});
router.get('/register', function (req, res) {
  console.log('request for file');
  res.sendFile(path.join(__dirname + '/../login.html'));
});
router.get('/about', function (req, res) {
  console.log('Request for about us page');
  res.send('About Us page');
});

module.exports = router;