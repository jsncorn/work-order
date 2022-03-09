import './App.scss';
import OrderForm from './components/orderForm/orderForm';
import Topbar from './components/topBar/topBar';

import { useState } from 'react';

function App() {

  const [ menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="App">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <OrderForm />
    </div>
  );
}

export default App;
