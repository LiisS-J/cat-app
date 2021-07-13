const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const catSchema = new Schema({
    name: String,
    sex: String,
    age: Number,
    breed: String,
    healthCondition: String,
    adoptionStatus: String,
    applicants: {
        type: Schema.Types.ObjectId,
        ref: 'Applicant'
    }
});

module.exports = mongoose.model('Cat', catSchema);