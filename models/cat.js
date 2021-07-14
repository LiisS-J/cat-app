const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const catSchema = new Schema({
    name: String,
    sex: String,
    age: Number,
    breed: String,
    health: String,
    adoptionStatus: String,
    imgUrl: {
        type: String,
    }
});

module.exports = mongoose.model('Cat', catSchema);