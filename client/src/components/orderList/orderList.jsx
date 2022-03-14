import { useMutation } from '@apollo/client';
import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import './orderList.scss'
import { REMOVE_ORDER } from '../../utils/mutations';
import Auth from '../../utils/Auth';

export default function OrderList({ orders, title }) {


    const [removeOrder] = useMutation(REMOVE_ORDER);

    if(!Auth.loggedIn()) {
        return (
            <div style={{display:'flex', justifyContent:'center', flexDirection:'column'}}>
        <h3 style={{marginBottom:'0px'}}>Please log in to see the orders</h3>
        <hr/>
        <button className='loginBtn'><Link className='link loginLink' to="/login">Go to Login →</Link></button>
        </div>
        )
    }

    else if (!orders.length) {
        return <h3>No work orders</h3>;
    };

    return (
        <div style={ { paddingBottom: "20px" } }>
            <h2>{ title }</h2>

            { orders &&
                orders.map((order) => (
                    <div className='orderWrapper' key={ order._id }>
                        <div className='orderDiv'>
                            <h3 className='orderName'>{ order.custName }</h3>
                            <br />
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
                                onClick={ () => {
                                    window.location.reload();
                                    console.log('removed');
                                    removeOrder({
                                        variables: {
                                            orderId: order._id
                                        }
                                    });
                                }
                                 }
                            >
                                delete
                            </button>
                        </div>
                    </div>
                )) }
        </div>
    )
}
