const Applicant = require('../models/applicant');

function addNewApplicant(req, res) {
    res.render('cats/newApplicantForm', {
        title: 'Adoption Application'
    });
}

function showApplicant(req, res) {
    Cat.findById(req.params.id, function(err, cat) {
        Applicant.find({ cat: cat._id }, function(err, applicants) {
            res.render('cats/showSingleCat', {
                title: 'All applicants',
                cat,
                applicants
            });
        });
    });
}

module.exports = {
    new: addNewApplicant,
    show: showApplicant
};