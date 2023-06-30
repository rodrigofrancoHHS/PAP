import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Register = () => {
  const apiUrl = 'https://localhost:7241';

  const [newProduct, setNewProduct] = useState({
    username: '',
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  const handleNewProductChange = (event) => {
    const { name, value } = event.target;
    setNewProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value
    }));
  };

  const addNewProduct = async () => {
    try {
      // Verificar se o email é válido antes de enviar a requisição
      if (!validateEmail(newProduct.email)) {
        setError('Email inválido');
        return;
      }

      const response = await fetch(`${apiUrl}/api/Utilizadores/InserirUtilizador`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify([newProduct])
      });

      if (response.ok) {
        setNewProduct({
          username: '',
          email: '',
          password: ''  
        });
        setError('')
      } else {
        const errorResponse = await response.text();
        setError(errorResponse);
      }
    } catch (error) {
      console.error('Erro ao conectar-se com a API:', error);
    }
  };

  const validateEmail = (email) => {
    // Expressão regular para validar o formato do email
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  return (
    <div>
      <Header />
      <div className="h-[500px] bg-gray-100 flex justify-center items-center">
        <div className="max-w-md w-full mx-auto p-8">
          <h2 className="text-3xl font-bold mb-4">Registrar</h2>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-medium">
              Username:
            </label>
            <input
              type="text"
              name="username"
              value={newProduct.username}
              onChange={handleNewProductChange}
              required
              className="border border-gray-300 px-3 py-2 rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium">
              Email:
            </label>
            <input
              type="email"
              name="email"
              value={newProduct.email}
              onChange={handleNewProductChange}
              required
              className="border border-gray-300 px-3 py-2 rounded-md w-full"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 font-medium">
              Password:
            </label>
            <input
              type="password"
              name="password"
              value={newProduct.password}
              onChange={handleNewProductChange}
              required
              className="border border-gray-300 px-3 py-2 rounded-md w-full"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-md"
            onClick={addNewProduct}
          >
            Register
          </button>
          <div className="mt-4 text-center">
            Already have an account?{' '}
            <Link to="/login" className="text-blue-500 hover:text-blue-700 font-semibold">
              Login
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Register;
