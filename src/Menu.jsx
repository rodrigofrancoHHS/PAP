import React, { useState, useEffect } from 'react';
import Produtos from './Produtos';
import Moedas from './Moedas';
import moment from 'moment';
import { Link} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';


function VendingMachine() {

  


  return (

    <div>
      <Header/>
      <br/><br/><br/><br/><br/><br/><br/>
      <Footer/>
    </div>
  );
}

export default VendingMachine;