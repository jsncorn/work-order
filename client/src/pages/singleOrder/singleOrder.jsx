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

    function dateFormat(obj) {
        var date = new Date(+obj);
        return date.toLocaleString([], {month: "long", day: "numeric", year: "numeric", hour: "numeric", minute: "numeric", hour12: true});
    }

    const order = data?.order || {};

    if (loading) {
        return <div> LOADING... </div>;
    }

    const ordermap = {
        "_id": "Order ID",
        "carYear": "Year",
        "carMake": "Make",
        "carModel": "Model",
        "carColor": "Color",
        "carPlate": "License Plate",
        "carVin": "VIN",
        "carMileage": "Mileage",
        "custName": "Name",
        "custNumber": "Phone Number",
        "orderSum": "Summary",
        "orderEst": "Estimate",
        "dateCreated": "Date Created"
    };

    const CarTab = ({ data }) => {
        return (
            <table border="1" >
                <tbody>
                    { Object.keys(data).map(key => {
                        if (key !== "__typename" && key !== "dateCreated") {
                            return (
                                <tr>
                                    <td width="10%">
                                        <div className="carTable">
                                            <span>{ ordermap[key] }</span>
                                        </div>
                                    </td>
                                    <td width="20%">
                                        <div className="carTable">
                                            <span>{ data[key] }</span>
                                        </div>
                                    </td>
                                </tr>
                            )
                        } else if (key === "dateCreated") {
                            return (
                                <tr>
                                    <td width="10%">
                                        <div className="carTable">
                                            <span>{ ordermap[key] }</span>
                                        </div>
                                    </td>
                                    <td width="20%">
                                        <div className="carTable">
                                            <span>{ dateFormat(data[key]) }</span>
                                        </div>
                                    </td>
                                </tr>
                            )
                        }
                    }) }
                </tbody>
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