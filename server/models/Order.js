const { Schema, model } = require('mongoose');

const orderSchema = new Schema({
    carYear: {
        type: Number,
        required: 'You need a car year',
        minlength: 4,
        maxlength: 4,
        trim: true
    },
    carMake: {
        type: String,
        required: 'You need a car make',
        minlength: 1,
        maxlength: 20,
        trim: true,
    },
    carModel: {
        type: String,
        required: 'You need a car model',
        minlength: 1,
        maxlength: 25,
        trim: true,
    },
    carColor: {
        type: String,
        minlength: 1,
        maxlength: 20,
        trim: true,
    },
    carPlate: {
        type: String,
        minlength: 7,
        maxlength: 7,
        trim: true,
    },
    carVin: {
        type: String,
        minlength: 17,
        maxlength: 17,
        trim: true,
    }
});

const Order = model('Order', orderSchema);

module.exports = Order;