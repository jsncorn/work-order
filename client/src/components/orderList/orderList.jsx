import React from 'react';
import { Link } from 'react-router-dom';
import './orderList.scss'

const orderList = ({ orders, title }) => {
    if (!orders.length) {
        return <h3>No work orders</h3>;
    }

    return (
        <div style={{paddingBottom: "20px"}}>
            <h2>{ title }</h2>
            { orders &&
                orders.map((order) => (
                    <div className='orderWrapper'>
                    <div className='orderDiv' key={ order._id }>
                        <h3 className='orderName'>{ order.custName }</h3>
                        <br/>
                        <div className='orderInfo'>
                        <span className='carInfo'>{ order.carYear } </span> 
                        <span className='carInfo'>{ order.carMake } </span>
                        <span className='carInfo'>{ order.carModel } </span>
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