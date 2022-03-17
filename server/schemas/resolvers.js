const { AuthenticationError } = require('apollo-server-express');
const {
    Order, Employee, Labor
} = require('../models');
const {signToken} = require('../utils/auth')

const resolvers = {
    Query: {
        orders: async () => {
            return Order.find().sort({ dateCreated: +1 });
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
        },
        labors: async () => {
            return Labor.find()
        },
    },
    Mutation: {
        addOrder: async (parent, { carYear, carMake, carModel, carMileage, carColor, carPlate, carVin, custName, custNumber, orderSum, orderEst, deliverDate }) => {
             return Order.create({ carYear, carMake, carModel, carMileage, carColor, carPlate, carVin, custName, custNumber, orderSum, orderEst, deliverDate });
            },
        removeOrder: async (parent, { orderId }) => {
             return Order.findOneAndDelete({ _id: orderId });
         },
        addEmployee: async (parent, args) => {
             const employee = await Employee.create(args);
             const token = signToken(employee);
             return {token, employee};
         },
        addLabor: async (parent, {description, hours, cost}) => {
            return Labor.create({description, hours, cost}) 
         },
         removeLabor: async(parent, { laborId }) => {
             return Labor.findOneAndDelete({_id: laborId})
        },
        login: async(parent, { email, password }) => {
             const employee = await Employee.findOne({ email });
             if(!employee) {
                 
                 throw new AuthenticationError('wrong login info');
             }
            
             const correctPw = await employee.isCorrectPassword(password); 
             if (!correctPw) {
                 throw new AuthenticationError('sadsadsad wrong password');
             }

             const token = signToken(employee);
             return {token, employee};

         }
    }
}

module.exports = resolvers;