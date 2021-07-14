const Cat = require('../models/cat');
const Applicant = require('../models/applicant');

function createACat(req, res) {
    const cat = new Cat(req.body);
    cat.save(function (err) {
        if (err) {
            console.log(err);
            return newCat(req, res);
        }
        res.redirect('/cats');
    });
}

function addNewCat(req, res) {
    res.render('cats/newCatForm', {
        title: 'Add New Cat'
    });
}

function showAllCats(req, res) {
    Cat.find({}, function (err, cats) {
        res.render('cats/showAllCats', {
            title: 'All adoptable cats',
            cats
        });
    });
}

function showSingleCat(req, res) {
    Cat.findById(req.params.id, function (err, cat) {
        Applicant.find({ cat: cat._id }, function (err, applicants) {
            res.render('cats/showSingleCat', {
                title: 'Cat',
                cat,
                applicants
            });
        });
    });
}

function deleteCatEntry(req, res) {
    Cat.findByIdAndDelete(req.params.id, function (err, cat) {
        Applicant.deleteMany({ cat: req.params.id }, function (err, cat) {
            if (err) {
                console.log(err);
            }
            res.redirect('/cats');
        })
    })
}

function updateCatEntry(req, res) {
    Cat.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: true},
        function(err, cat) {
            if (err) {
                console.log(err);
            }
            res.redirect(`/cats/${req.params.id}`);
        }
    )
}

function editCatEntry(req, res) {
    Cat.findById(req.params.id, function (err, cat) {
        res.render('cats/editCatForm', {
            title: 'Update Cat Entry',
            cat
        })
    }) 
}

module.exports = {
    index: showAllCats,
    new: addNewCat,
    create: createACat,
    show: showSingleCat,
    delete: deleteCatEntry,
    update: updateCatEntry,
    edit: editCatEntry
};