const Cat = require('../models/cat');

function createACat(req, res) {
    const cat = new Cat(req.body);
    cat.save(function (err) {
        if(err) {
            console.log(err);
            return newCat(req, res);
        }
        res.redirect('cats');
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

function showSingleCat(req, res){
    Cat.findById(req.params.id, function(err, cat) {
        res.render('cats/showSingleCat', {
            title: 'Cat',
            cat
        });
    });
}

module.exports = {
    index: showAllCats,
    new: addNewCat,
    create: createACat,
    show: showSingleCat
};