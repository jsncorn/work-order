import React from 'react';

const Orderform = () => {

    const handleFormSubmit = async (e) => {
        e.preventDefault();
    }

    return (
        <div className='wrapper'>

            <h3>Create New Order</h3>
            <form className='left flex-row justify-center justify-space-between-md align-center' onSubmit={ handleFormSubmit }>
                <div className='col-12'>
                    <input name="carYear" placeholder="car year" />
                </div>
                <div className='col-12'>
                    <input name="carMake" placeholder="car make" />
                </div>
                <div className='col-12'>
                    <input name="carModel" placeholder="car model" />
                </div>
                <div className='col-12'>
                    <input name="carColor" placeholder="car color" />
                </div>
                <div className='col-12'>
                    <input name="carYear" placeholder="car year" />
                </div>
                <div className='col-12'>
    <input name="carPlate" placeholder="car license plate"/>
    </div>
    <div className='col-12'>
    <input name="carVin" placeholder="car vin"/>
    </div>

            </form>


        </div>
    );
}

export default Orderform;
