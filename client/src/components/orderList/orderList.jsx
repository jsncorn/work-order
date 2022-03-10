import React from 'react';
import { Link } from 'react-router-dom';

const orderList = ({ orders, title }) => {
    if (!orders.length) {
        return <h3>No work orders</h3>;
    }
console.log("hellow")
    console.log(orders);

    return (
        <div>
            <h3>{ title }</h3>
            { orders &&
                orders.map((order) => (
                    <div key={ order._id }>
                        <h3>{ order.custName }</h3>
                        <br />
                        <span>{ order.carYear }</span> 
                        <span>{ order.carMake } </span>
                        <span>{ order.carModel }</span>
                        <Link
                            to={ `/orders/${order._id}` }
                        >
                            order button.
                        </Link>
                    </div>

                )) }
        </div>
    )
}

export default orderList;