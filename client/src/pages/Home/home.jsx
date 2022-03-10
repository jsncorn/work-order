import React from 'react';
import OrderList from '../../components/orderList/orderList';
import { useQuery } from '@apollo/client';
import { QUERY_ORDERS } from '../../utils/queries';

const Home = () => {

  const { loading, data } = useQuery(QUERY_ORDERS);
  const orders = data?.orders || [];

  return (
    <main>
      <div className="flex-row justify-center">
        <div
          className=""
          style={{ border: '1px dotted #1a1a1a' }}
        >
          sample text
        </div>
        <div className="">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <OrderList
              orders={orders}
              title="orders!"
            />
          )}
        </div>
      </div>
    </main>
  )
}

export default Home;