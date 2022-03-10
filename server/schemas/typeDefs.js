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
    custNumber: Int
    custSt: String
    custCity: String
    custState: String
    custZip: Int
    orderSum: String
    orderEst: Int
    doneBy: String
}

type Query {
    orders: [Order]!
    order(orderId: ID!): Order
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
        custNumber: Int!,
        custSt: String!,
        custCity: String!,
        custState: String!,
        custZip: Int!,
        orderSum: String!,
        orderEst: Int!,
        doneBy: String!,
    ): Order

    removeOrder(orderId: ID!): Order
}


`


module.exports = typeDefs;