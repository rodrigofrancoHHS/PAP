import React from 'react';

const ProductDetails = (props) => {
  // Obter detalhes do produto dos parâmetros da URL
  const searchParams = new URLSearchParams(props.location.search);
  const productId = searchParams.get('id');
  const productName = searchParams.get('name');
  const productPrice = searchParams.get('price');

  return (
    <div>
      <h2>Detalhes do Produto</h2>
      <p>ID: {productId}</p>
      <p>Nome: {productName}</p>
      <p>Preço: {productPrice}</p>
      {/* Resto do conteúdo da página de detalhes do produto */}
    </div>
  );
};

export default ProductDetails;