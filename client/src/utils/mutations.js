import {
    gql
} from '@apollo/client';

export const ADD_ORDER = gql `
mutation addOrder($carYear: String!, $carMake: String!, $carModel: String!, $carMileage: String!, $carColor: String!, $carPlate: String!, $carVin: String!, $custName: String!, $custNumber: String!, $orderSum: String!, $orderEst: String!, $deliverDate: String!) {
    addOrder(carYear: $carYear, carMake: $carMake, carModel: $carModel, carMileage: $carMileage, carColor: $carColor, carPlate: $carPlate, carVin: $carVin, custName: $custName, custNumber: $custNumber, orderSum: $orderSum, orderEst: $orderEst, deliverDate: $deliverDate) {
        _id
        carYear
        carMake
        carModel
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