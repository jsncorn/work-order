const {
    Order
} = require('../models');

const resolvers = {
    Query: {
        orders: async () => {
            return Order.find().sort({ doneBy: -1 });
        },
        


    }


}

module.exports = resolvers;