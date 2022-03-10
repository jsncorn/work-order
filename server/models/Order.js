const {
    Schema,
    model
} = require('mongoose');

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
        type: Number,
        required: 'You need a customer number',
        minlength: 7,
        maxlength: 10,
        trim: true,
    },
    custSt: {
        type: String,
        required: 'You need a customer street',
        minlength: 1,
        maxlength: 40,
        trim: true,
    },
    custCity: {
        type: String,
        required: 'You need a customer city',
        minlength: 1,
        maxlength: 40,
        trim: true,
    },
    custState: {
        type: String,
        required: 'You need a customer state',
        minlength: 1,
        maxlength: 40,
        trim: true,
    },
    custZip: {
        type: Number,
        required: 'You need a customer ZIP code',
        minlength: 5,
        maxlength: 5,
        trim: true,
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
        type: mongoose.Decimal128,
        required: 'You need an order estimate',
        minlength: 1,
        maxlength: 1000,
    },
    doneBy: {
        type: Date,
        default: Date.now,
        // LATER, ADD A CALENDAR THEN FORMAT IT USING EXT LIB
    }
});

const Order = model('Order', orderSchema);

module.exports = Order;