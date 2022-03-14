import React from 'react';
import OrderList from '../../components/orderList/OrderList';
import { useQuery } from '@apollo/client';
import { QUERY_ORDERS } from '../../utils/queries';

const Home = () => {

  const { loading, data } = useQuery(QUERY_ORDERS);
  const orders = data?.orders || [];
  //
  console.log(orders);

  return (
    <main>
      <div className="home flex-row justify-center">
        <div className="">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <OrderList
              orders={orders}
              title="Current Active Work Orders"
            />
          )}
        </div>
      </div>
    </main>
  )
}

export default Home;