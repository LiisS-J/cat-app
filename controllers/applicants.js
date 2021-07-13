const Applicant = require('../models/applicant');
const Cat = require('../models/cat');

function addNewApplicant(req, res) {
    Cat.findById(req.params.id, function (err, cat) {
        console.log(`this should output what our cat is --> ${cat}`);
        res.render('cats/newApplicantForm', {
            title: 'Adoption Application',
            cat
        });
    });
}

// function showApplicant(req, res) {
//     Cat.findById(req.params.id, function (err, cat) {
//         Applicant.find({ cat: cat._id }, function (err, applicants) {
//             res.render('cats/showSingleCat', {
//                 title: 'All applicants',
//                 cat,
//                 applicants
//             });
//         });
//     });
// }

function createNewApplicant(req, res) {
    Cat.findById(req.params.id, function (err, cat) {
        console.log(` THIS IS WHERE APPLICANTS SHOULD BE -->${applicants}`);
        cat.applicants.push(req.body);
        cat.save(function(err) {
            res.redirect(`/${cat._id}`);
        })
    });
}

module.exports = {
    new: addNewApplicant,
    create: createNewApplicant
};