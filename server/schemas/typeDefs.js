const {
    gql
} = require('apollo-server-express');

const typeDefs = gql `
type Order {
    _id: ID
    carYear: Int
    carMake: String
    carModel: String
    carColor: String
    carPlate: String
    carVin: String
    custName: String
    custNumber: String
    custSt: String
    custCity: String
    custState: String
    custZip: Int
    orderSum: String
    orderEst: Int
}

type Query {
    orders: [Order]!
    order(orderId: ID!): Order
    employee: Employee
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
        carYear: Int!,
        carMake: String!,
        carModel: String!,
        carColor: String!,
        carPlate: String!,
        carVin: String!,
        custName: String!,
        custNumber: String!,
        custSt: String!,
        custCity: String!,
        custState: String!,
        custZip: Int!,
        orderSum: String!,
        orderEst: Int!,
    ): Order

    updateOrder(
        carYear: Int,
        carMake: String,
        carModel: String,
        carColor: String,
        carPlate: String,
        carVin: String,
        custName: String,
        custNumber: String,
        custSt: String,
        custCity: String,
        custState: String,
        custZip: Int,
        orderSum: String,
        orderEst: Int,
    ): Order

    removeOrder(orderId: ID!): Order

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

    login(email: String!, password: String!): Auth
}


`


module.exports = typeDefs;