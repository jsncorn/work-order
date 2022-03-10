import React from 'react';
import OrderList from '../../components/orderList/orderList';
import { useQuery } from '@apollo/client';
import { QUERY_ORDERS } from '../../utils/queries';
import './Home.scss'

const Home = () => {

  const { loading, data } = useQuery(QUERY_ORDERS);
  const orders = data?.orders || [];
  
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
              title="orders!"
            />
          )}
        </div>
      </div>
    </main>
  )
}

export default Home;