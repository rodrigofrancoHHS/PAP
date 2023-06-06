import React from 'react';

function ProdDestaque() {
  // Array de produtos
  const products = [
    { name: 'Produto 1', price: '12', quantity: '12', img: '/sweat1.png' },
    { name: 'Produto 2', price: '12', quantity: '34', img: '/sweat2.png' },
    { name: 'Produto 3', price: '12', quantity: '13', img: '/sweat3.png' },
    { name: 'Produto 4', price: '12', quantity: '2', img: '/sweat4.png'},
    { name: 'Produto 5', price: '12', quantity: '17', img: '/sweat5.png' },
    { name: 'Produto 6', price: '12', quantity: '7', img: '/tshirt1.png' },
    { name: 'Produto 7', price: '12', quantity: '21', img: '/tshirt2.png' },
    { name: 'Produto 8', price: '12', quantity: '12', img: '/tshirt3.png' },
    { name: 'Produto 9', price: '12', quantity: '35', img: '/tshirt4.png' },
    { name: 'Produto 10', price: '12', quantity: '11', img: '/tshirt5.png' },
    { name: 'Produto 11', price: '12', quantity: '10', img: '/cap1.png' },
    { name: 'Produto 12', price: '12', quantity: '4', img: '/cap2.png' }
  ];

  return (
<div>
  <div class="container mx-auto">
  <h2 class="text-5xl font-extrabold text-center mb-6 py-8 bg-gradient-to-r from-red-500 to-blue-500 text-white rounded-lg">DESTAQUES</h2>
    <div class="grid grid-cols-4 gap-8">
      {products.map((product) => (
        <div key={product.name} class="border border-gray-300 rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
          <div class="relative">
            {product.img ? (
              <div class="group">
                <img src={product.img} alt={product.name} class="w-full h-64 object-cover" />
                <div class="absolute bottom-0 left-0 right-0 px-6 py-4 opacity-0 transition-opacity duration-300 bg-black bg-opacity-75 text-white group-hover:opacity-100">
                  <h3 class="text-2xl font-bold mb-2">{product.name}</h3>
                  <p class="text-gray-300 mb-2">Preço: {product.price}</p>
                  <p class="text-gray-300">Quantidade: {product.quantity}</p>
                </div>
              </div>
            ) : (
              <div class="w-full h-64 bg-gray-200"></div>
            )}
          </div>
          <div class="p-6">
            <button class="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-full w-full">
              Selecionar
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>


  );
}

export default ProdDestaque;