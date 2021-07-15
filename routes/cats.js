const express = require('express');
const router = express.Router();
const catsCtrl = require('../controllers/cats');

router.get('/', catsCtrl.index);

router.post('/', catsCtrl.create);

router.get('/new', catsCtrl.new);

router.get('/:id', catsCtrl.show);

router.delete('/:id', catsCtrl.delete);

router.put('/:id', catsCtrl.update);

router.get('/:id/edit', catsCtrl.edit);

module.exports = router;
