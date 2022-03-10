import React from "react";
import './singleOrder.scss';
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import { QUERY_SINGLE_ORDER } from "../../utils/queries";


const SingleOrder = () => {
    const { orderId } = useParams();
    const { loading, data } = useQuery(QUERY_SINGLE_ORDER, {
        variables: { orderId: orderId }
    });

    const order = data?.order || {};

    if (loading) {
        return <div> LOADING... </div>;
    }

    return (
        <div className="soMain">
            <div className="carSection">
                <table> 
                    <tr>
                        <td width="20%">
                            <div class="carTable">
                                <scan>Car Year</scan>
                            </div>
                        </td>
                        <td width="20%">
                            <div class="carTable">
                                <scan>{order.carYear}</scan>
                            </div>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    );

}

export default SingleOrder;

/*carYear
carMake
carModel
carColor
carPlate
carVin
custName
custNumber
custSt
custCity
custState
custZip
orderSum
orderEst*/