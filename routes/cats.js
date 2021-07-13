const express = require('express');
const router = express.Router();
const catsCtrl = require('../controllers/cats');

// this route goes to the page that shows all adoptable cats

router.get('/', catsCtrl.index);

// This route goes to the new cat form that the admin uses to add a new cat for adoption
// Figure out how to implement it as an admin(hidden from the user)

// This route directs the inserted cat form data into all adoptable cats view

router.get('/new', catsCtrl.new);


// this route goes to an individual cat's detail page
router.get('/:id', catsCtrl.show);


// this route goes to the adoption form
// router.get('/adopt', catsCtrl.new);

module.exports = router;
