import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.scss';
import OrderForm from './pages/orderForm/orderForm';
import Topbar from './components/topBar/topBar';
import Home from './pages/Home/home';

import { useState } from 'react';


const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <ApolloProvider client={ client }>
      <Router>
        <div className="App flex-column justify-flex-start ">
          <Topbar menuOpen={ menuOpen } setMenuOpen={ setMenuOpen } />
          <div className='container'>
            <Routes>
            <Route path='/' element={ <Home /> } />
              <Route path='/newform' element={ <OrderForm /> } />
            </Routes>
          </div>
        </div>
      </Router>

    </ApolloProvider>
  );
}

export default App;
