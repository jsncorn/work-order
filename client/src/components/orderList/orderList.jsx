import React from 'react';
import { Link } from 'react-router-dom';

const orderList = ({ orders, title }) => {
    if (!orders.length ) {
        return <h3>No work orders</h3>;
    }


return (
    <div>
        <h3>{title}</h3>
        { orders && 
        orders.map((order) => (
            <div key={order._id}>
                <h3>{order.custName}</h3>
                <br/>
                <span>{order.carYear} {order.carMake} {order.carModel}</span>
                </div>
        ))}
    </div>
)
}

export default orderList;