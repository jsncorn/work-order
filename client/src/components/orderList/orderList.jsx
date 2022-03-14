import { useMutation } from '@apollo/client';
import React from 'react';
import { Link } from 'react-router-dom';
import './orderList.scss'

const orderList = ({ orders, title }) => {
    if (!orders.length) {
        return <h3>No work orders</h3>;
    }

const [removeOrder ] = useMutation(REMOVE_ORDER)

const handleSubmit = async (e) => {
    const mutationResponse = await removeOrder({
        variables: {
            _id: orders._id
        }
    })
}

    return (
        <div style={{paddingBottom: "20px"}}>
            <h2>{ title }</h2>
            
            { orders &&
                orders.map((order) => (
                    <div className='orderWrapper' key={ order._id }>
                    <div className='orderDiv'>
                        <h3 className='orderName'>{ order.custName }</h3>
                        <br/>
                        <div className='orderInfo'>
                        <span className='carInfo'>{ order.carYear } </span> 
                        <span className='carInfo'>{ order.carMake } </span>
                        <span className='carInfo'>{ order.carModel } </span>
                        </div>
                        <Link
                        className='viewBtn'
                            to={ `/orders/${order._id}` }
                        >
                            view
                        </Link>
                        <button
                        className='delBtn'
                            onSubmit={handleSubmit}
                        >
                            delete
                        </button>
                    </div>
                    </div>
                )) }
        </div>
    )
}

export default orderList;