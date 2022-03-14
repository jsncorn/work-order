import React, { useState } from 'react';
import './orderForm.scss'
import { ADD_ORDER } from '../../utils/mutations';
import { useMutation } from '@apollo/client';

export default function Orderform(props) {

    const [formState, setFormState] = useState({ carYear: '', carMake: '',
carModel: '', carColor: '', carPlate: '', carVin: '', customerName: '',
customerNum: '', customerSt: '', customerCity: '', customerState: '', customerZip:'',
workSum: '', workEst: ''})
    const [addOrder] = useMutation(ADD_ORDER);

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        const mutationResponse = await addOrder({
            variables: {
                carYear: formState.carYear,
                carMake: formState.carMake,
                carModel: formState.carModel,
                carColor: formState.carColor,
                carPlate: formState.carPlate,
                carVin: formState.carVin,
                customerName: formState.customerName,
                customerSt: formState.customerSt,
                customerCity: formState.customerCity,
                customerState: formState.customerState,
                customerZip: formState.customerZip,
                workSum: formState.workSum,
                workEst: formState.workEst
            }
        });
        const token = mutationResponse.data.addOrder.token;
        // no login for now
        // Auth.login(token);
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormState({
            ...formState,
            [name]: value,
        })
    }
    
    return (
        <div className='wrapper'>

            <h3>Create New Order</h3>
            <form className='flex-row justify-center justify-space-between-md align-center' onSubmit={ handleFormSubmit }>
                <div className='left'>

                    <div className='carDiv'>
                        <h3 style={ { width: '100%' } }>Car Information</h3>
                        <div className='carLeft'>
                            <div className='col-12'>
                                <label>Year:
                                    <input name="carYear" onChange={handleChange}/>
                                </label>
                            </div>
                            <div className='col-12'>
                                <label>Make:
                                    <input name="carMake" onChange={handleChange}/>
                                </label>
                            </div>
                            <div className='col-12'>
                                <label>Model:
                                    <input name="carModel" onChange={handleChange}/>
                                </label>
                            </div>
                        </div>
                        <div className='carRight'>
                            <div className='col-12'>
                                <label>Color:
                                    <input name="carColor" onChange={handleChange}/>
                                </label>
                            </div>
                            <div className='col-12'>
                                <label>License Plate #:
                                    <input name="carPlate" onChange={handleChange}/>
                                </label>
                            </div>
                            <div className='col-12'>
                                <label>VIN #:
                                    <input name="carVin" onChange={handleChange}/>
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className='customerDiv'>
                        <h3 style={ { width: '100%' } }>Customer Information</h3>
                        <div className='customerLeft'>
                            <div className='col-12'>
                                <label>Name:
                                    <input name="customerName" onChange={handleChange}/>
                                </label>
                            </div>
                            <div className='col-12'>
                                <label>Number:
                                    <input name="customerNum" onChange={handleChange}/>
                                </label>
                            </div>
                        </div>
                        <div className='customerRight'>
                            <div className='col-12'>
                                <label>Street:
                                    <input name="customerSt" onChange={handleChange}/>
                                </label>
                            </div>
                            <div className='col-12'>
                                <label>City:
                                    <input name="customerCity" onChange={handleChange}/>
                                </label>
                            </div>
                            <div className='col-12'>
                                <label>State:
                                    <input name="customerState" onChange={handleChange}/>
                                </label>
                            </div>
                            <div className='col-12'>
                                <label>ZIP:
                                    <input name="customerZip" onChange={handleChange}/>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className='workDiv'>
                        <h3 style={ { width: '100%' } }>Work Order</h3>
                        <div className='workLeft'>
                            <div className='col-12'>
                                <label>Summary:
                                    <textarea name="workSum"  onChange={handleChange}/>
                                </label>
                            </div>
                        </div>
                        <div className='workRight'>
                            <div className='col-12'>
                                <label>Estimate:
                                    <input name="workEst" onChange={handleChange}/>
                                </label>
                            </div>
                        </div>
                        <div>
                            <button type='submit'>Submit</button>
                        </div>

                    </div>
                </div>
            </form>


        </div>
    );
}


