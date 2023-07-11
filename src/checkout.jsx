import React, { useEffect, useState } from 'react';
import Header from './Header';
import Footer from './Footer';

const Checkout = () => {
  const [cartItems, setCartItems] = useState([]);
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');

  const getUserIdFromCookie = () => {
    return getCookie('userId');
  };

  useEffect(() => {
    const userId = getUserIdFromCookie();
    const cartItemsKey = `cartItems_${userId}`;
    const storedCartItems = localStorage.getItem(cartItemsKey);

    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);

  const getCookie = (name) => {
    const cookies = document.cookie.split('; ');
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].split('=');
      if (cookie[0] === name) {
        return cookie[1];
      }
    }
    return null;
  };

  const calculateTotalPrice = () => {
    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    return totalPrice.toFixed(2);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const userId = getUserIdFromCookie();
    const cartItemsKey = `cartItems_${userId}`;
    const storedCartItems = localStorage.getItem(cartItemsKey);

    if (!storedCartItems) {
      console.error('O carrinho está vazio.');
      return;
    }

    try {
      const orderData = {
        user_id: userId,
        email: email,
        phone: phone,
        address: address,
        payment_method: paymentMethod,
        total_price: calculateTotalPrice(),
      };

      await fetch('https://localhost:7241/api/Orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData),
      });


    } catch (error) {
      console.error('Erro ao enviar o pedido:', error);
    }
  };

  return (
    <div>
      <Header />
      <div className="container mx-auto p-8">
        <h2 className="text-3xl font-bold mb-4">Checkout</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-100 p-4">
            <h3 className="text-lg font-bold mb-2">Produtos Selecionados</h3>
            {cartItems.length === 0 ? (
              <p>O carrinho está vazio.</p>
            ) : (
              <>
                <ul className="mb-4">
                  {cartItems.map((item) => (
                    <li key={item.id} className="mb-2">
                      {item.name} ({item.quantity})
                    </li>
                  ))}
                </ul>
                <p className="text-gray-700">Entrega: Gratuita</p>
                <p className="font-bold">Total: {calculateTotalPrice()} €</p>
              </>
            )}
          </div>
          <div>
            <h3 className="text-lg font-bold mb-2">Detalhes do Cliente</h3>
            <div className="mb-4">
              <label htmlFor="username" className="block font-medium text-gray-700">
                Nome de Utilizador:
              </label>
              <input
                id="username"
                type="text"
                value={getCookie('username')}
                readOnly
                className="border border-gray-300 px-3 py-2 rounded-md w-full"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block font-medium text-gray-700">
                Email:
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={handleEmailChange}
                className="border border-gray-300 px-3 py-2 rounded-md w-full"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="phone" className="block font-medium text-gray-700">
                Telefone:
              </label>
              <input
                id="phone"
                type="tel"
                value={phone}
                onChange={handlePhoneChange}
                className="border border-gray-300 px-3 py-2 rounded-md w-full"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="address" className="block font-medium text-gray-700">
                Morada:
              </label>
              <textarea
                id="address"
                rows="4"
                value={address}
                onChange={handleAddressChange}
                className="border border-gray-300 px-3 py-2 rounded-md w-full"
              ></textarea>
            </div>
            <div className="mb-4">
              <label htmlFor="paymentMethod" className="block font-medium text-gray-700">
                Método de Pagamento:
              </label>
              <select
                id="paymentMethod"
                value={paymentMethod}
                onChange={handlePaymentMethodChange}
                className="border border-gray-300 px-3 py-2 rounded-md w-full"
              >
                <option value="">Selecione uma opção</option>
                <option value="creditCard">Cartão de Crédito</option>
                <option value="debitCard">Cartão de Débito</option>
                <option value="paypal">PayPal</option>
                {/* Adicione mais opções de pagamento aqui, se necessário */}
              </select>
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
              onClick={handleSubmit}
            >
              Enviar Pedido
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Checkout;
