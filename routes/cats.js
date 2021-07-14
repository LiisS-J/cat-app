const express = require('express');
const router = express.Router();
const catsCtrl = require('../controllers/cats');

// this route goes to the page that shows all adoptable cats

router.get('/', catsCtrl.index);

router.post('/', catsCtrl.create);

router.get('/new', catsCtrl.new);

router.get('/:id', catsCtrl.show);

router.delete('/:id', catsCtrl.delete);

router.put('/:id', catsCtrl.update);

module.exports = router;
