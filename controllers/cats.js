const Cat = require('../models/cat');

function showLandingPg(req, res) {
    res.render('cats/landingPg', {
        title: 'Happy Paws Adoption'
    });
};

// function showAllCats(req, res) {

// }

module.exports = {
    index: showLandingPg,
    // show: showAllCats
}