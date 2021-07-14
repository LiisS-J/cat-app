const express = require('express');
const router = express.Router();
const applicantsCtrl = require('../controllers/applicants');

// This routes the visitor to the application form
router.get('/cats/:id/adopt/new', applicantsCtrl.new);

// This route posts applicants form into the individual cat's
router.post('/cats/:id/applicant', applicantsCtrl.create);

router.delete('/cats/:id/applicant/:applicantId', applicantsCtrl.delete);

module.exports = router;