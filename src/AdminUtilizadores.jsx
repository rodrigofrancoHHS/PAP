import React, { useState, useEffect } from 'react';
import AdminHeader from './AdminHeader';
import Sidebar from './Sidebar';

const AdminUtilizadores = () => {
  const [utilizadores, setUtilizadores] = useState([]);

  useEffect(() => {
    fetch('https://localhost:7180/api/Login')
      .then((response) => response.json())
      .then((data) => setUtilizadores(data))
      .catch((error) => console.error('Erro ao obter os utilizadores:', error));
  }, []);

  const handleTipoChange = async (utilizadorId, novoTipo) => {
    try {
      await fetch(`https://localhost:7180/api/Login/ChangeUserType/${utilizadorId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      const novosUtilizadores = utilizadores.map((utilizador) => {
        if (utilizador.id === utilizadorId) {
          return { ...utilizador, type: novoTipo };
        }
        return utilizador;
      });
  
      setUtilizadores(novosUtilizadores);
    } catch (error) {
      console.error('Erro ao alterar o tipo do utilizador:', error);
    }
  };

  return (
    <div>
      <AdminHeader />
      <div className="min-h-screen flex">
        <Sidebar />
        <div className="flex-grow p-8">
          <h2 className="text-3xl font-bold mb-4">Administração de Utilizadores</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="border px-4 py-2">ID</th>
                  <th className="border px-4 py-2">Username</th>
                  <th className="border px-4 py-2">Email</th>
                  <th className="border px-4 py-2">Tipo</th>
                </tr>
              </thead>
              <tbody>
                {utilizadores.map((utilizador) => (
                  <tr key={utilizador.id}>
                    <td className="border px-4 py-2">{utilizador.id}</td>
                    <td className="border px-4 py-2">{utilizador.username}</td>
                    <td className="border px-4 py-2">{utilizador.email}</td>
                    <td className="border px-4 py-2">
                      {utilizador.type === 0 ? (
                        <button
                          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-1 px-2 rounded"
                          onClick={() => handleTipoChange(utilizador.id, 1)}
                        >
                          Admin
                        </button>
                      ) : (
                        <button
                          className="bg-red-500 hover:bg-red-600 text-white font-semibold py-1 px-2 rounded"
                          onClick={() => handleTipoChange(utilizador.id, 0)}
                        >
                          User
                        </button>
                      )}
                    </td>
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

export default AdminUtilizadores;
