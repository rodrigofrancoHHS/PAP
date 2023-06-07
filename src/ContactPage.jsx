import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';

function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para enviar o formulário
    // para o servidor ou realizar outras ações necessárias.
    // Por exemplo, você pode fazer uma solicitação HTTP usando Axios.

    // Resetar o estado do formulário
    setName('');
    setEmail('');
    setMessage('');
  };

  return (

    <div>
    <Header/>
    <br/><br/><br/>
    <div className="bg-gray-100 min-h-screen py-8">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Tem alguma questão?</h2>
        <div className="flex flex-col md:flex-row justify-center items-center mb-8">
          <img src="https://example.com/boneco-e-carta.jpg" alt="Boneco e carta" className="w-64 h-64 object-cover rounded-full mb-4 md:mb-0" />
          <div className="ml-0 md:ml-8">
            <p className="text-lg mb-2">Dados da Empresa:</p>
            <p className="text-gray-600">Endereço: 123 Rua Principal</p>
            <p className="text-gray-600">Cidade: Exemplo</p>
            <p className="text-gray-600">Telefone: (123) 456-7890</p>
          </div>
        </div>
        <form className="max-w-lg mx-auto">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Nome:</label>
            <input type="text" id="name" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
            <input type="email" id="email" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500" />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Mensagem:</label>
            <textarea id="message" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"></textarea>
          </div>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg w-full">Enviar</button>
        </form>
      </div>
    </div>
    </div>
  );
}

export default ContactPage;