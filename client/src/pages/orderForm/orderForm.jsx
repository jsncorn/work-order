import React, { useState } from 'react';
import './orderForm.scss'
import { ADD_ORDER } from '../../utils/mutations';
import { useMutation } from '@apollo/client';
import Auth from '../../utils/Auth';
import { Link } from 'react-router-dom';

export default function Orderform(props) {

    const [formState, setFormState] = useState({
        carYear: '', carMake: '',
        carModel: '', carColor: '', carPlate: '', carVin: '', customerName: '',
        customerNum: '', customerSt: '', customerCity: '', customerState: '', customerZip: '',
        workSum: '', workEst: ''
    })
    const [addOrder] = useMutation(ADD_ORDER);
    const [formMsg, setFormMsg] = useState('');
    const [color, setColor] = useState('');
    const [afterSubmit, setAfterSubmit] = useState('hidden');
    const [formVisibility, setFormVisibility] = useState('shown');


    const handleFormSubmit = async (e) => {
        if (!Auth.loggedIn) {
            console.log("User is not logged in")
        }
        try {
            e.preventDefault();
            const mutationResponse = await addOrder({
                variables: {
                    carYear: formState.carYear,
                    carMake: formState.carMake,
                    carModel: formState.carModel,
                    carColor: formState.carColor,
                    carPlate: formState.carPlate,
                    carVin: formState.carVin,
                    custName: formState.customerName,
                    custNumber: formState.customerNum,
                    custSt: formState.customerSt,
                    custCity: formState.customerCity,
                    custState: formState.customerState,
                    custZip: formState.customerZip,
                    orderSum: formState.orderSum,
                    orderEst: formState.orderEst
                }

                /*variables: {
                    "carYear": "2016",
                    "carMake":"maserati",
                    "carModel":"ghibli",
                    "carColor":"black",
                    "carPlate":"plate12",
                    "carVin":"1G1PE5SB2E7134527",
                    "custName":"jason three",
                    "custNumber":"5101234567",
                    "custSt":"123 Street St",
                    "custCity":"City",
                    "custState":"State",
                    "custZip": "12345",
                    "orderSum":"sumarry foaisdjusiaas",
                    "orderEst": "123"
                }*/
            });

            setFormMsg('Info successfully sent');
            setColor('green');
            setAfterSubmit('');
            setFormVisibility('hidden');
        } catch (error) {
            console.log(error);
            setFormMsg('There was a validation error in one field, please look over it again.');
            setColor('red');
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormState({
            ...formState,
            [name]: value,
        });
    }

    if (!Auth.loggedIn()) {
        return (
            <div className="home" style={ { display: 'flex', justifyContent: 'center', flexDirection: 'column' } }>
                <h3 style={ { marginBottom: '0px' } }>Please log in to create a new form</h3>
                <hr />
                <button className='loginBtn'><Link className='link loginLink' to="/login">Go to Login →</Link></button>
            </div>
        )
    }

    return (
        <div className='wrapper home'>

            <h3>New Order</h3>
            <form className={'flex-row justify-center justify-space-between-md align-center' + {formVisibility}} onSubmit={ handleFormSubmit }>
                <div className='left'>

                    <div className='carDiv'>
                        <h3 style={ { width: '100%' } }>Car Information</h3>
                        <div className='carLeft'>
                            <div className='col-12'>
                                <label>Year:
                                    <input name="carYear" id="carYear" onChange={ handleChange } />
                                </label>
                            </div>
                            <div className='col-12'>
                                <label>Make:
                                    <input name="carMake" id='carMake' onChange={ handleChange } />
                                </label>
                            </div>
                            <div className='col-12'>
                                <label>Model:
                                    <input name="carModel" id="carModel" onChange={ handleChange } />
                                </label>
                            </div>
                        </div>
                        <div className='carRight'>
                            <div className='col-12'>
                                <label>Color:
                                    <input name="carColor" id="carColor" onChange={ handleChange } />
                                </label>
                            </div>
                            <div className='col-12'>
                                <label>License Plate #:
                                    <input name="carPlate" id="carPlate" onChange={ handleChange } />
                                </label>
                            </div>
                            <div className='col-12'>
                                <label>VIN #:
                                    <input name="carVin" id="carVin" onChange={ handleChange } />
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className='customerDiv'>
                        <h3 style={ { width: '100%' } }>Customer Information</h3>
                        <div className='customerLeft'>
                            <div className='col-12'>
                                <label>Name:
                                    <input name="customerName" id="customerName" onChange={ handleChange } />
                                </label>
                            </div>
                            <div className='col-12'>
                                <label>Number:
                                    <input name="customerNum" id="customerNum" onChange={ handleChange } />
                                </label>
                            </div>
                        </div>
                        <div className='customerRight'>
                            <div className='col-12'>
                                <label>Street:
                                    <input name="customerSt" id="customerSt" onChange={ handleChange } />
                                </label>
                            </div>
                            <div className='col-12'>
                                <label>City:
                                    <input name="customerCity" id="customerCity" onChange={ handleChange } />
                                </label>
                            </div>
                            <div className='col-12'>
                                <label>State:
                                    <input name="customerState" id="customerState" onChange={ handleChange } />
                                </label>
                            </div>
                            <div className='col-12'>
                                <label>ZIP:
                                    <input name="customerZip" id="customerZip" onChange={ handleChange } />
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className='workDiv'>
                        <h3 style={ { width: '100%' } }>Work Order</h3>
                        <div className='workLeft'>
                            <div className='col-12'>
                                <label>Summary:
                                    <textarea name="orderSum" id="orderSum" onChange={ handleChange } />
                                </label>
                            </div>
                        </div>
                        <div className='workRight'>
                            <div className='col-12'>
                                <label>Estimate:
                                    <input name="orderEst" id="orderEst" onChange={ handleChange } />
                                </label>
                            </div>
                        </div>
                        <div className='formSubmit'>
                            <span className={color}>{ formMsg }</span>
                            <span className={afterSubmit}>Click here to make another order.</span>
                            <br/>
                            <button type='submit'>Submit</button>
                            
                        </div>

                    </div>
                </div>
            </form>


        </div>
    );
}


