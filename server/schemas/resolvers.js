const {
    Order
} = require('../models');

const resolvers = {
    Query: {
        orders: async () => {
            return Order.find().sort({ carYear: -1 });
        },
        order: async (parent, { orderId }) => {
            return Order.findOne({ _id: orderId });
        }
    },
    Mutation: {
        addOrder: async (parent, { carYear, carMake, carModel, carColor, carPlate, carVin, custName, custNumber, custSt, custCity, custState, custZip, orderSum, orderEst  }) => {
             return Order.create({ carYear, carMake, carModel, carColor, carPlate, carVin, custName, custNumber, custSt, custCity, custState, custZip, orderSum, orderEst });
            },
         removeOrder: async (parent, { orderId }) => {
             return Order.findOneAndDelete({ _id: orderId });
         }
    }



}

module.exports = resolvers;