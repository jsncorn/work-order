import {
    gql
} from '@apollo/client';

export const ADD_ORDER = gql `
mutation addOrder($carYear: Int!, $carMake: String!, $carModel: String!, $carColor: String!, $carPlate: String!, $carVin: String!, $custName: String!, $custNumber: String!, $custSt: String!, $custCity: String!, $custState: String!, $custZip: Int!, $orderSum: String!, $orderEst: Int!) {
    addOrder(carYear: $carYear, carMake: $carMake, carModel: $carModel, carColor: $carColor, carPlate: $carPlate, carVin: $carVin, custName: $custName, custNumber: $custNumber, custSt: $custSt, custCity: $custCity, custState: $custState, custZip: $custZip, orderSum: $orderSum, orderEst: $orderEst) {
        _id
        carYear
        carMake
        carModel
        carColor
        carPlate
        carVin
        custName
        custNumber
        custSt
        custCity
        custState
        custZip
        orderSum
        orderEst
    }
}
`;