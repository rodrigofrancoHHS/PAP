import React, { useState, useEffect } from 'react';
import AdminHeader from './AdminHeader';
import Sidebar from './Sidebar';

const AdminProdutos = () => {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    fetch('https://localhost:7241/api/TodosProdutos/ListadeProdutos')
      .then((response) => response.json())
      .then((data) => setProdutos(data))
      .catch((error) => console.error('Erro ao obter os produtos:', error));
  }, []);

  return (
    <div>
      <AdminHeader />
      <div className="min-h-screen flex">
        <Sidebar />
        <div className="flex-grow p-8">
          <h2 className="text-3xl font-bold mb-4">Administração de Produtos</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="border px-4 py-2">ID</th>
                  <th className="border px-4 py-2">Nome</th>
                  <th className="border px-4 py-2">Descrição</th>
                  <th className="border px-4 py-2">Preço</th>
                  <th className="border px-4 py-2">Preço de Varejo Sugerido</th>
                  <th className="border px-4 py-2">Quantidade</th>
                  <th className="border px-4 py-2">Imagem</th>
                  <th className="border px-4 py-2">Tipo</th>
                </tr>
              </thead>
              <tbody>
                {produtos.map((produto) => (
                  <tr key={produto.id}>
                    <td className="border px-4 py-2">{produto.id}</td>
                    <td className="border px-4 py-2">{produto.name}</td>
                    <td className="border px-4 py-2">{produto.desc}</td>
                    <td className="border px-4 py-2">{produto.price}</td>
                    <td className="border px-4 py-2">{produto.rrp}</td>
                    <td className="border px-4 py-2">{produto.quantity}</td>
                    <td className="border px-4 py-2">{produto.img}</td>
                    <td className="border px-4 py-2">{produto.type}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProdutos;
