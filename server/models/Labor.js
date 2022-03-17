const { Schema, model } = require('mongoose');
const mongoose = require('mongoose');
mongoose.plugin(require('mongoose-nanoid'), 10);

const laborSchema = new Schema({
    description: {
        type: String,
        required: 'You need to provide a job description',
        trim: true,
    },
    hours: {
        type: String,
        validate: /^[0-9]*$/
    },
    cost: {
        type: String,
        validate: /^[0-9]*$/
    }
});

const Labor = model('Labor', laborSchema);
module.exports = Labor;