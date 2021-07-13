const express = require('express');
const router = express.Router();
const applicantsCtrl = require('../controllers/applicants');

// This routes the visitor to the application form
router.get('/adopt/new', applicantsCtrl.new);

// This route re-directs the applicants information from their application 
// form into the showSingleCat view of the cat they're interested in:
router.get('/:id', applicantsCtrl.show);

module.exports = router;