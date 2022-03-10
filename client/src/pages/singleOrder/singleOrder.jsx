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
            { order.custName }
        </div>
    );

}

export default SingleOrder;