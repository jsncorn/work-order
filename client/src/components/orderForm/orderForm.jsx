import React from 'react';
import './orderForm.scss'

const Orderform = () => {

    const handleFormSubmit = async (e) => {
        e.preventDefault();
    }

    return (
        <div className='wrapper'>

            <h3>Create New Order</h3>
            <form className='flex-row justify-center justify-space-between-md align-center' onSubmit={ handleFormSubmit }>
                <div className='left'>

                    <div className='carDiv'>
                    <h3 style={{width: '100%'}}>Car Information</h3>
                        <div className='carLeft'>
                            <div className='col-12'>
                                <label>Year:
                                    <input name="carYear" />
                                </label>
                            </div>
                            <div className='col-12'>
                                <label>Make:
                                    <input name="carMake" />
                                </label>
                            </div>
                            <div className='col-12'>
                                <label>Model:
                                    <input name="carModel" />
                                </label>
                            </div>
                        </div>
                        <div className='carRight'>
                            <div className='col-12'>
                                <label>Color:
                                    <input name="carColor" />
                                </label>
                            </div>
                            <div className='col-12'>
                                <label>License Plate #:
                                    <input name="carPlate" />
                                </label>
                            </div>
                            <div className='col-12'>
                                <label>VIN #:
                                    <input name="carVin" />
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className='customerDiv'>
                    <h3 style={{width: '100%'}}>Customer Information</h3>
                        <div className='customerLeft'>
                            <div className='col-12'>
                                <label>Name:
                                    <input name="customerName" />
                                </label>
                            </div>
                            <div className='col-12'>
                                <label>Number:
                                    <input name="customerNum" />
                                </label>
                            </div>
                        </div>
                        <div className='customerRight'>
                            <div className='col-12'>
                                <label>Street
                                    <input name="customerSt" />
                                </label>
                            </div>
                            <div className='col-12'>
                                <label>City
                                    <input name="customerCity" />
                                </label>
                            </div>
                            <div className='col-12'>
                                <label>State
                                    <input name="customerState" />
                                </label>
                            </div>
                            <div className='col-12'>
                                <label>ZIP
                                    <input name="customerZip" />
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className='col-12'>
                        <textarea name="workSum" placeholder="work order summary" />
                    </div>
                </div>
            </form>


        </div>
    );
}

export default Orderform;
