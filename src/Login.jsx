import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Verifica se o cookie existe
  useEffect(() => {
    const cookieUsername = getCookie('username');
    if (cookieUsername) {
      setIsLoggedIn(true);
      setUsername(cookieUsername);
    }
  }, []);

  // Função para obter um cookie pelo nome
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

  const handleLogin = async (e) => {
    e.preventDefault();

    const url = `https://localhost:7180/api/Login?username=${username}&password=${password}`;

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        // Login realizado com sucesso
        console.log('Login realizado com sucesso');

        // Cria o cookie de autenticação
        document.cookie = `username=${username}; path=/`;

        setPassword('');
        setIsLoggedIn(true);

        // Redireciona para a página Menu
        navigate('/');
      } else {
        // Lidar com erro de Login
        console.error('Erro durante o Login');
      }
    } catch (error) {
      console.error('Erro de rede:', error);
    }
  };

  return (
    <div>
      <Header />
      <div className="h-[500px] bg-gray-100 flex justify-center items-center">
        <div className="max-w-md w-full mx-auto p-8">
          {isLoggedIn ? (
            <h2 className="text-3xl font-bold mb-4">Bem-vindo, {username}!</h2>
          ) : (
            <>
              <h2 className="text-3xl font-bold mb-4">Login</h2>
              <form onSubmit={handleLogin}>
                <div className="mb-4">
                  <label htmlFor="username" className="block text-gray-700 font-medium">
                    Username:
                  </label>
                  <input
                    type="text"
                    id="username"
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
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
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
            </>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
