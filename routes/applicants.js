const express = require('express');
const router = express.Router();
const applicantsCtrl = require('../controllers/applicants');

// This routes the visitor to the application form
router.get('/:id/adopt/new', applicantsCtrl.new);

// This route posts applicants form into the individual cat's page
router.post('/:id', applicantsCtrl.create);

module.exports = router;