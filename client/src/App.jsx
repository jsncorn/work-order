import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.scss';
import OrderForm from './pages/orderForm/orderForm';
import Topbar from './components/topBar/topBar';

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
        <div className="App">
          <Topbar menuOpen={ menuOpen } setMenuOpen={ setMenuOpen } />
          <Routes>
            <Route path='/newform' element={<OrderForm />}/>
          </Routes>
        </div>
      </Router>

    </ApolloProvider>
  );
}

export default App;
