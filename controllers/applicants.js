const Applicant = require('../models/applicant');
const Cat = require('../models/cat');



function addNewApplicant(req, res) {
    Cat.findById(req.params.id, function (err, cat) {
        res.render('cats/newApplicantForm', {
            title: 'Adoption Application',
            cat
        });
    });
}

function createNewApplicant(req, res) {
    req.body.cat = req.params.id;
    const applicant = new Applicant(req.body);
    applicant.save(function (err) {
        if (err) {
            console.log(err);
            return newApplicant(req, res)
        }
        console.log(applicant);
        res.redirect(`/cats/${req.params.id}`);
    });
}

function deleteApplicant(req, res) {
    Applicant.findByIdAndDelete(req.params.applicantId, function (err, applicant) {
        if (err) {
            console.log(err);
        }
        res.redirect(`/cats/${req.params.id}`);
    });
}

module.exports = {
    new: addNewApplicant,
    create: createNewApplicant,
    delete: deleteApplicant
}