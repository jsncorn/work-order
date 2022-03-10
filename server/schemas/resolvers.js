const {
    Order
} = require('../models');

const resolvers = {
    Query: {
        orders: async () => {
            return Order.find().sort({ doneBy: -1 });
        },
        order: async (_, { orderId }) => {
            return Order.findOne({ _id: orderId });
        }
    },
    Mutation: {
        addOrder: async (_, { 
            carYear, carMake, carModel, carColor, carPlate, carVin,
            custName, custNumber, custSt, custCity, custState, custZip,
            orderSum, orderEst, doneBy
         }) => {
             return Order.create({ carYear, carMake, carModel, carColor, carPlate, carVin,
                custName, custNumber, custSt, custCity, custState, custZip,
                orderSum, orderEst, doneBy })
         },
         removeOrder: async (_, { orderId }) => {
             return Order.findOneAndDelete({ _id: orderId });
         }
    }



}

module.exports = resolvers;