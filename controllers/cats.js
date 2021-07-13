const Cat = require('../models/cat');

// function showLandingPg(req, res) {
//     res.render('cats/landingPg', {
//         title: 'Happy Paws Adoption'
//     });
// };

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

    // function createNewCat(req, res) {
    //     const cat = new Cat(req.body);
    //     cat.save(function(err) {
    //         if (err) {
    //             console.log(err)
    //             return createNewCat(req, res);
    //         }
    //         console.log(cat)
    //         res.redirect('/cats');
    //     });
    // }

module.exports = {
    index: showAllCats,
    new: addNewCat
};