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

    const CarTab = ({ data }) => {
        return (
            <table border="1">
                { Object.keys(data).map(key => {
                    return (
                        <tr>
                            <td width="10%">
                                <div class="carTable">
                                    <scan>{key}</scan>
                                </div>
                            </td>
                            <td width="20%">
                                <div class="carTable">
                                    <scan>{data[key]}</scan>
                                </div>
                            </td>
                        </tr>
                    )
                }) }
            </table>
        )
    }

    return (
        <div className="soMain">
            <div className="carSection">
                <CarTab data={ order } />
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