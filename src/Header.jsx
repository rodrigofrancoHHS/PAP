import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiUser, FiShoppingCart } from 'react-icons/fi';

function Header() {
  const [username, setUsername] = useState('');
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

  return (
    <header className="bg-white text-gray-900 py-6 pb-4">
      <div className="container mx-auto flex items-center justify-between py-4">
        <div className="flex items-center">
          <Link to="/">
            <img src="/stalogo.png" alt="Logotipo" className="h-16 pb-0" />
          </Link>
        </div>

        <nav className="flex justify-center flex-grow">
          <ul className="flex space-x-4 text-xl">
            <li>
              <Link to="/MenuSweats" className="hover:bg-black hover:text-white px-4 py-2 rounded-lg">
                Sweats
              </Link>
            </li>
            <li>
              <Link to="/MenuTshirts" className="hover:bg-black hover:text-white px-4 py-2 rounded-lg">
                T-Shirts
              </Link>
            </li>
            <li>
              <Link to="/MenuCaps" className="hover:bg-black hover:text-white px-4 py-2 rounded-lg">
                Chapéus-Gorros
              </Link>
            </li>
            <li>
              <Link to="/SobreNos/" className="hover:bg-black hover:text-white px-4 py-2 rounded-lg">
                Sobre Nós
              </Link>
            </li>
            <li>
              <Link to="/ContactPage/" className="hover:bg-black hover:text-white px-4 py-2 rounded-lg">
                Contactos
              </Link>
            </li>
          </ul>
        </nav>

        <div className="flex items-center space-x-4">
          {isLoggedIn ? (
            <>
              <span>Bem-vindo, {username}!</span>
              <button className="hover:bg-black hover:text-white rounded-full p-2">
                <Link to="/cart">
                  <FiShoppingCart className="h-6 w-6 text-gray-900 hover:text-white" />
                </Link>
              </button>
            </>
          ) : (
            <button className="hover:bg-black hover:text-white rounded-full p-2">
              <Link to="/login">
                <FiUser className="h-6 w-6 text-gray-900 hover:text-white" />
              </Link>
            </button>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
