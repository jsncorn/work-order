const { AuthenticationError } = require('apollo-server-express');
const {
    Order, Employee
} = require('../models');

const resolvers = {
    Query: {
        orders: async () => {
            return Order.find().sort({ carYear: -1 });
        },
        order: async (parent, { orderId }) => {
            return Order.findOne({ _id: orderId });
        },
        employee: async (parent, args, context) => {
            if (context.employee) {
                const employee = await Employee.findById(context.employee.id).populate({
                    path: 'orders.custName',
                });
                return employee;
            }
            throw new AuthenticationError('not logged in')
        }
    },
    Mutation: {
        addOrder: async (parent, { carYear, carMake, carModel, carColor, carPlate, carVin, custName, custNumber, custSt, custCity, custState, custZip, orderSum, orderEst  }) => {
             return Order.create({ carYear, carMake, carModel, carColor, carPlate, carVin, custName, custNumber, custSt, custCity, custState, custZip, orderSum, orderEst });
            },
        removeOrder: async (parent, { orderId }) => {
             return Order.findOneAndDelete({ _id: orderId });
         },
         addEmployee: async (parent, args) => {
             const employee = await Employee.create(args);
             const token = signToken(employee);
             return {token, employee};
         },
         updateEmployee: async(parent, args, context) => {
             if (context.employee) {
                 return Employee.findByIdAndUpdate(context.employee.id, args, {
                     new: true
                 })
             }
             throw new AuthenticationError('not logged in')
         },
         login: async(parent, { email, password }) => {
             const employee = await Employee.findOne({ email });

             if(!user) {
                 throw new AuthenticationError('wrong login info');
             }

             const correctPw = await employee.isCorrectPassword(password);
             if (!correctPw) {
                 throw new AuthenticationError('wrong password');
             }

             const token = signToken(employee);
             return {token, user};

         }
    }
}

module.exports = resolvers;