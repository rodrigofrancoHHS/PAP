import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();

    const url = `https://localhost:7180/api/Login/register?username=${username}&password=${password}`;

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      // Registro realizado com sucesso
      console.log('Registro realizado com sucesso');
      setPassword('');
      setUsername('');
    } else {
      // Lidar com erro de registro
      console.error('Erro durante o registro');
    }
  }
   catch (error) {
    console.error('Erro de rede:', error);
  }
  };

  return (
    <div>
      <Header />
      <div className="h-[500px] bg-gray-100 flex justify-center items-center">
        <div className="max-w-md w-full mx-auto p-8">
          <h2 className="text-3xl font-bold mb-4">Registrar</h2>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700 font-medium">
              Username:
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
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
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="border border-gray-300 px-3 py-2 rounded-md w-full"
            />
          </div>
          <button
            type="submit"
            onClick={handleRegister}
            className="bg-blue-500 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-md"
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
