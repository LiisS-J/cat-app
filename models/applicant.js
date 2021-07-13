const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const applicantSchema = new Schema({
    name: String,
    age: {
        type: Number,
        min: 18
    },
    address: String,
    homereq: String,
    healthreq: String,
    cat: {
        type: Schema.Types.ObjectId,
        ref: 'Cat'
    }
});

module.exports = mongoose.model('Applicant', applicantSchema);
