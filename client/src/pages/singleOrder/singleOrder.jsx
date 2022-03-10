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

    console.log(order)

    if (loading) {
        return <div> LOADING... </div>;
    }

    return (
        <div className="soMain">
            <div className="carSection">
                <table>
                { order.map(obj => {
                        return (
                            <tr>
                                <td width="20%">
                                    <div class="carTable">
                                        <scan>Hi</scan>
                                    </div>
                                </td>
                                <td width="20%">
                                    <div class="carTable">
                                        <scan>Bye</scan>
                                    </div>
                                </td>
                            </tr>
                        )
                    }) }
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