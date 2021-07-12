var express = require('express');
var router = express.Router();
const catsCtrl = require('../controllers/cats');

router.get('/', catsCtrl.index);

module.exports = router;
