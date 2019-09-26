import React from 'react';
import './App.css';
import Admin from './components/Admin/Admin'
import Cart from './components/Cart/Cart'
import Catalog from './components/Catalog/Catalog'
import Header from './components/Header/Header'

function App() {
  return (
    <div className="App">
      <Header />
      <Catalog />
      <Cart />
      <Admin />   
    </div>
  );
}

export default App;
