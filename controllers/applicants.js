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
    // Instead of trying to associate an applicant with a cat by looking up 
    // a cat FIRST, what we only need to do is to create a new applicant,
    // and save the cat ID (from the URL [req.params.id]) as part of the
    // req.body.
    Cat.findById(req.params.id, function (err, cat) {
        // Not needed: cat.applicants.push(req.body);
        cat.save(function(err) {
            res.redirect(`/cats/${cat._id}`);
        })
    });
}

module.exports = {
    new: addNewApplicant,
    create: createNewApplicant
};