import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!username || !password) {
      setError('Please enter both username and password');
      return;
      }

    try {

      const url = `https://localhost:7241/api/Utilizadores/VerificarUtilizador?username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`;

      const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });


      if (response.ok) {
        // Login bem-sucedido
        // Redirecionar para a página principal ou realizar outras ações necessárias
        console.log('Login realizado com sucesso');
      } else {
        const errorResponse = await response.text();
        setError(errorResponse);
      }
    } catch (error) {
      console.error('Erro ao conectar-se com a API:', error);
    }

    // Limpar os campos do formulário após a submissão
    setUsername('');
    setPassword('');
    setError('');
  };

  return (
    <div>
      <Header />
      <div className="h-[500px] bg-gray-100 flex justify-center items-center">
        <div className="max-w-md w-full mx-auto p-8">
          <h2 className="text-3xl font-bold mb-4">Login</h2>
          <form onSubmit={handleSubmit}>
            {error && <p className="text-red-500 mb-4">{error}</p>}
            <div className="mb-4">
              <label htmlFor="username" className="block text-gray-700 font-medium">
                Username:
              </label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={handleUsernameChange}
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
                value={password}
                onChange={handlePasswordChange}
                required
                className="border border-gray-300 px-3 py-2 rounded-md w-full"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded mr-2"
            >
              Login
            </button>
            <Link to="/register">
              <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded">
                Registrar
              </button>
            </Link>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
  