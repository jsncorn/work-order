import React from 'react';
import OrderList from '../../components/orderList/orderList';
import Topbar from '../../components/topBar/topBar';
import { useState } from 'react';
import { useQuery } from '@apollo/client';

function Home() {
    
const {loading, data} = useQuery();
const orders = data?.orders || [];

  return (
      
    <div>
        <OrderList orders={orders} />
    </div>
  )
}

export default Home;