import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Cart = ({ cartItems, removeFromCart }) => {
  const calculateTotalPrice = () => {
    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    return totalPrice.toFixed(2);
  };

  return (
    <div>
      <Header />
      <div className="container mx-auto p-8">
        <h2 className="text-3xl font-bold mb-4">Carrinho de Compras</h2>
        {cartItems.length === 0 ? (
          <p>O carrinho está vazio.</p>
        ) : (
          <div>
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-center mb-4">
                <img src={item.img} alt={item.name} className="w-16 h-16 mr-4" />
                <div>
                  <h3 className="font-bold">{item.name}</h3>
                  <p>Preço: {item.price} €</p>
                  <p>Quantidade: {item.quantity}</p>
                  <button
                    className="text-red-500 hover:text-red-700"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remover
                  </button>
                </div>
              </div>
            ))}
            <p className="font-bold">Total: {calculateTotalPrice()} €</p>
            <Link to="/checkout">
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
                Finalizar Compra
              </button>
            </Link>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
