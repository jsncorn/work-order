import {
    gql
} from '@apollo/client';

export const QUERY_ORDERS = gql `
query getOrders {
    orders {
        _id
        carYear
        carMake
        carModel
        carMileage
        carColor
        carPlate
        carVin
        custName
        custNumber
        orderSum
        orderEst
        deliverDate
    }
}
`;

export const QUERY_SINGLE_ORDER = gql `
query getSingleOrder($orderId: ID!) {
    order(orderId: $orderId) {
        _id
        carYear
        carMake
        carModel
        carMileage
        carColor
        carPlate
        carVin
        custName
        custNumber
        orderSum
        orderEst
        dateCreated
        deliverDate
    }
}
`;