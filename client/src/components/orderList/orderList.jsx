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
                    <div className='orderWrapper'>
                    <div className='orderDiv' key={ order._id }>
                        <h3 className='orderName'>{ order.custName }</h3>
                        <br/>
                        <div className='orderInfo'>
                        <span>{ order.carYear } </span> 
                        <span>{ order.carMake } </span>
                        <span>{ order.carModel } </span>
                        </div>
                        <Link
                        className='button'
                            to={ `/orders/${order._id}` }
                        >
                            view order
                        </Link>

                    </div>
                    </div>
                )) }
        </div>
    )
}

export default orderList;