import React, { useState, useEffect } from 'react';
import Produtos from './Produtos';
import Moedas from './Moedas';
import moment from 'moment';
import { Link} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import ProdDestaque from './ProdDestaque';
import BannerDuvidas from './BannerDuvidas';
import Recomendacoes from './Recomendações';


function VendingMachine() {

  


  return (

    <div>
      <Header/>
      <div>
      <img src="/staslideprod.png" alt="Imagem Grande" className="w-full" />
      </div>
      <br/><br/><br/>
      <ProdDestaque/>
      <br/><br/><br/><br/><br/>
      <Recomendacoes/>
      <br/><br/><br/>
      <BannerDuvidas/>
      <Footer/>
    </div>
  );
}

export default VendingMachine;