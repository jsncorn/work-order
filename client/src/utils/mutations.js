import {
    gql
} from '@apollo/client';

export const ADD_ORDER = gql `
mutation addOrder($carYear: String!, $carMake: String!, $carModel: String!, $carColor: String!, $carPlate: String!, $carVin: String!, $custName: String!, $custNumber: String!, $custSt: String!, $custCity: String!, $custState: String!, $custZip: String!, $orderSum: String!, $orderEst: String!) {
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

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      employee {
        _id
      }
    }
  }
`;

export const ADD_EMPLOYEE = gql`
    mutation addEmployee(
        $firstName: String!
        $lastName: String!
        $email: String!
        $password: String!
    ) {
        addEmployee(
            firstName: $firstName
            lastName: $lastName
            email: $email
            password: $password
        ) {
            token
            employee {
                _id
            }
        }
    }
`;

export const REMOVE_ORDER = gql`
mutation removeOrder ($orderId: ID!){
    removeOrder(orderId: $orderId) {
        custName
    }
}`