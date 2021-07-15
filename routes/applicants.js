const express = require('express');
const router = express.Router();
const applicantsCtrl = require('../controllers/applicants');

router.get('/cats/:id/adopt/new', applicantsCtrl.new);

router.post('/cats/:id/applicant', applicantsCtrl.create);

router.delete('/cats/:id/applicant/:applicantId', applicantsCtrl.delete);

module.exports = router;