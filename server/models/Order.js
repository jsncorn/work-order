const {
    Schema,
    model
} = require('mongoose');
const mongoose = require('mongoose');
mongoose.plugin(require('mongoose-nanoid'), 6);

const orderSchema = new Schema({
    carYear: {
        type: String,
        required: 'You need a car year',
        validate: /^(19|20)\d{2}$/,
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
    carMileage: {
        type: String,
        trim: true,
        validate: /^[0-9]*$/
    },
    carColor: {
        type: String,
        minlength: 1,
        maxlength: 20,
        trim: true,
    },
    carPlate: {
        type: String,
        required: 'You need a plate number',
        minlength: 7,
        maxlength: 7,
        trim: true,
    },
    carVin: {
        type: String,
        required: 'You need a VIN',
        minlength: 17,
        maxlength: 17,
        trim: true,
    },
    custName: {
        type: String,
        required: 'You need a customer name',
        minlength: 1,
        maxlength: 40,
        trim: true,
    },
    custNumber: {
        type: String,
        required: 'You need a customer number',
        trim: true,
        validate:/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/
    },
    orderSum: {
        type: String,
        required: 'You need an order summary',
        minlength: 1,
        maxlength: 1000,
        trim: true,
        // maybe in the future, make this an array so we can have
        // multiple order summaries
    },
    orderEst: {
        type: String,
        required: 'You need an order estimate',
        validate: /^[0-9]*$/
    },
    // doneBy: {
    //     type: String,
    //     minlength: 1,
    //     maxlength: 20,
    //     // LATER, ADD A CALENDAR THEN FORMAT IT USING EXT LIB
    // },
    dateCreated: {
        type: String,
        default: Date.now
    },
    deliverDate: {
        type: String,
    }
});

const Order = model('Order', orderSchema);

module.exports = Order;