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


    }


}

module.exports = resolvers;