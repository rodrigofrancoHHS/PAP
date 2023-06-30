import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const ContactPage = () => {

  
  return (

    <div>
      <Header/>
      <div className='flex items-center justify-center bg-gray-100 h-104 '>
      {/* Lado Esquerdo */}
      <div className="w-1/2 flex flex-col justify-center items-center p-8 rounded-l-lg">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Entre em contato</h1>
        <p className="text-xl text-gray-700 mb-8">Bem-vindo à nossa página de contatos!</p>
        
        {/* Formulário de contato */}
        <form className="w-full max-w-lg">
          <div className="mb-4">
            <label className="block text-gray-800 text-sm font-bold mb-2" htmlFor="name">
              Nome
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Seu nome" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-800 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Seu email" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-800 text-sm font-bold mb-2" htmlFor="message">
              Mensagem
            </label>
            <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="message" rows="5" placeholder="Sua mensagem"></textarea>
          </div>
          <div className="flex items-center justify-center">
            <button className="bg-black text-white font-bold py-2 px-4 rounded w-40 focus:outline-none focus:shadow-outline !important" type="button">
              Enviar
            </button>
          </div>
        </form>
      </div>
      
      {/* Lado Direito */}
      <div className="w-1/2 flex flex-col justify-center items-center p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Informações da Empresa</h2>
        <p className="text-xl text-gray-800 mb-8">Bem-vindo à nossa empresa! Aqui estão algumas informações sobre nós.</p>
        <div className="bg-white rounded p-4">
        <div className="flex items-center text-gray-800 mb-4">
    <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
    <span>
      ManelSport <br/>
      Carlos Manuel Coelho Dias, Lda | NIF: PT50 504 552 392<br/>
      Rua José Verissimo - Loja A - Prédio AMJ - Santa Cruz<br/>
      2560-499 SILVEIRA<br/>
      Portugal<br/>
    </span>
  </div>
  
  <a href="tel:+123456789" className="flex items-center text-gray-800 mb-4">
    <FontAwesomeIcon icon={faPhone} className="mr-2" />
    <span>+351 261931617</span>
  </a>
  
  <a href="mailto:info@empresa.com" className="flex items-center text-gray-800">
    <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
    <span>manelsport@manelsport.com</span>
  </a> 
      </div>
      </div>
      </div>
      <Footer/>
    </div>
  );
};

export default ContactPage;
