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
                        <div className='carLeft'>
                            <div className='col-12'>
                                <label>Year:
                                    <input name="carYear" placeholder="car year" />
                                    </label>
                            </div>
                            <div className='col-12'>
                                <label>Make:
                                <input name="carMake" placeholder="car make" />
                            </label>
                            </div>
                            <div className='col-12'>
                                <label>Model:
                                <input name="carModel" placeholder="car model" />
                            </label>
                            </div>
                        </div>
                        <div className='carRight'>
                            <div className='col-12'>
                                <label>Color:
                                <input name="carColor" placeholder="car color" />
                           </label>
                            </div>
                            <div className='col-12'>
                                <label>License Plate #:
                                <input name="carPlate" placeholder="car license plate" />
                            </label>
                            </div>
                            <div className='col-12'>
                                <label>VIN #:
                                <input name="carVin" placeholder="car vin" />
                            </label>
                            </div>
                        </div>
                    </div>
                    <div className='customerDiv'>
                        <div className='col-12'>
                            <input name="customerName" placeholder="customer name" />
                        </div>
                        <div className='col-12'>
                            <input name="customerNum" placeholder="customer number" />
                        </div>
                        <div className='col-12'>
                            <input name="customerAdd" placeholder="customer address" />
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
