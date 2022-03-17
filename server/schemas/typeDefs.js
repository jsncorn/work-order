const {
    gql
} = require('apollo-server-express');

const typeDefs = gql `
type Order {
    _id: ID
    carYear: String
    carMake: String
    carModel: String
    carMileage: String
    carColor: String
    carPlate: String
    carVin: String
    custName: String
    custNumber: String
    orderSum: String
    orderEst: String
    dateCreated: String
    deliverDate: String
}

type Labor {
    description: String
    hours: String
    cost: String
}

type Query {
    orders: [Order]!
    order(orderId: ID!): Order
    employee: Employee
    labor: Labor 
    labors: [Labor]!
}

type Employee {
    _id: ID
    firstName: String
    lastName: String
    email: String
    order: [Order]
}

type Auth {
    token: ID
    employee: Employee
}

type Mutation {
    addOrder(
        carYear: String!,
        carMake: String!,
        carModel: String!,
        carMileage: String!,
        carColor: String!,
        carPlate: String!,
        carVin: String!,
        custName: String!,
        custNumber: String!,
        orderSum: String!,
        orderEst: String!,
        deliverDate: String!
    ): Order

    removeOrder(orderId: ID!): Order
    
    removeLabor(laborId: ID!): Labor

    addEmployee(
        firstName: String!
        lastName: String!
        email: String!
        password: String!
    ): Auth

    updateEmployee(
        firstName: String
        lastName: String
        email: String
        password: String
    ): Employee

    addLabor(
        description: String!
        hours: String!
        cost: String!
    ): Labor

    login(email: String!, password: String!): Auth
}


`


module.exports = typeDefs;