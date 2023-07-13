import React, { useState, useEffect } from 'react';
import AdminHeader from './AdminHeader';
import Sidebar from './Sidebar';

const AdminProdutos = () => {
  const [vendas, setVendas] = useState([]);

  useEffect(() => {
    fetch('https://localhost:7241/api/Orders')
      .then((response) => response.json())
      .then((data) => setVendas(data))
      .catch((error) => console.error('Erro ao obter as vendas:', error));
  }, []);

  return (
    <div>
      <AdminHeader />
      <div className="min-h-screen flex">
        <Sidebar />
        <div className="flex-grow p-8">
          <h2 className="text-3xl font-bold mb-4">Administração de Compras</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="border px-4 py-2">ID</th>
                  <th className="border px-4 py-2">User_ID</th>
                  <th className="border px-4 py-2">Email</th>
                  <th className="border px-4 py-2">Telefone</th>
                  <th className="border px-4 py-2">Morada</th>
                  <th className="border px-4 py-2">Metodo de Pagamento</th>
                  <th className="border px-4 py-2">Preço Total</th>
                  <th className="border px-4 py-2">Data</th>
                  <th className="border px-4 py-2">Produtos</th>
                </tr>
              </thead>
              <tbody>
                {vendas.map((venda) => (
                  <tr key={venda.id}>
                    <td className="border px-4 py-2">{venda.id}</td>
                    <td className="border px-4 py-2">{venda.user_id}</td>
                    <td className="border px-4 py-2">{venda.email}</td>
                    <td className="border px-4 py-2">{venda.phone}</td>
                    <td className="border px-4 py-2">{venda.adress}</td>
                    <td className="border px-4 py-2">{venda.payment_method}</td>
                    <td className="border px-4 py-2">{venda.total_price}</td>
                    <td className="border px-4 py-2">{venda.created_at}</td>
                    <td className="border px-4 py-2">{venda.products}</td>
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
