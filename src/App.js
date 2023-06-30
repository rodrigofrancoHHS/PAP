import './App.css';
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from './Menu';
import ContactPage from './ContactPage';
import SobreNos from './SobreNos';
import ProductDetails from './ProductDetails';
import MenuSweats from './MenuSweats';
import MenuTshirts from './MenuTshirts';
import MenuCaps from './MenuCaps';
import Cart from './Cart';
import Login from './Login';
import Register from './Register';

function App() {


  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (productId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedCartItems);
  };


  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/SobreNos" element={<SobreNos />} />
          <Route
            path="/product-details/:id"
            element={<ProductDetails addToCart={addToCart} />}
          />
          <Route path="/ContactPage" element={<ContactPage />} />
          <Route path="/MenuSweats" element={<MenuSweats />} />
          <Route path="/MenuTshirts" element={<MenuTshirts />} />
          <Route path="/MenuCaps" element={<MenuCaps />} />
          <Route path="/" element={<Menu />} />
          <Route
            path="/cart"
            element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} />}
          />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
