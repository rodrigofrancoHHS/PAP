import React from 'react';
import { Link } from 'react-router-dom';

function ProdDestaque() {

  
  // Array de produtos
  const products = [
    {id: '1', name: 'SANTA CRUZ CLÁSSICA | SWEAT | NAVY', price: '29,90', quantity: '12', img: '/sweat1.png' },
    {id: '2', name: 'SANTA CRUZ MAGIC LAND ROUND | SWEAT | GREY', price: '29,90', quantity: '34', img: '/sweat2.png' },
    {id: '3', name: 'SANTA CRUZ STA KEEP ON SLIDING JR | SWEAT | GREEN', price: '29,90', quantity: '13', img: '/sweat3.png' },
    {id: '4', name: 'SANTA CRUZ OESTE AGRESTE | CREW | NAVY', price: '24,90', quantity: '2', img: '/sweat4.png'},
    {id: '5', name: 'SANTA CRUZ PENEDO | SWEAT | BEJE', price: '34,90', quantity: '17', img: '/sweat5.png' },
    {id: '6', name: 'SANTA CRUZ CLASSICA | T-SHIRT | GREY', price: '15,90', quantity: '7', img: '/tshirt1.png' },
    {id: '7', name: 'SANTA CRUZ ELEMENTS FIRE | T-SHIRT | BLACK', price: '19,90', quantity: '21', img: '/tshirt2.png' },
    {id: '8', name: 'SANTA CRUZ STA QUILHAS | T-SHIRT JUNIOR | NAVY', price: '15,90', quantity: '12', img: '/tshirt3.png' },
    {id: '9', name: 'SANTA CRUZ MS65 | T-SHIRT | GREY', price: '19,90', quantity: '35', img: '/tshirt4.png' },
    {id: '10', name: 'SANTA CRUZ PENEDO | T-SHIRT | BLACK', price: '19,90', quantity: '11', img: '/tshirt5.png' },
    {id: '11', name: 'SANTA CRUZ STA BORDADO FLEXFIT BONÉ | BLACK', price: '19,90', quantity: '10', img: '/cap1.png' },
    {id: '12', name: 'SANTA CRUZ STA BORDADO FLEXFIT BONÉ | GREEN', price: '19,90', quantity: '4', img: '/cap2.png' }
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
                  <p class="text-gray-300 mb-2">Preço: {product.price} €</p>
                  <p class="text-gray-300">Quantidade: {product.quantity}</p>
                </div>
              </div>
            ) : (
              <div class="w-full h-64 bg-gray-200"></div>
            )}
          </div>
          <div class="p-6">
          <Link to={`/product-details?id=${product.id}&name=${product.name}&price=${product.price}`}>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
              Selecionar
            </button>
          </Link>
          </div>
        </div>
      ))}
    </div>
  </div>
  
</div>


  );
}

export default ProdDestaque;