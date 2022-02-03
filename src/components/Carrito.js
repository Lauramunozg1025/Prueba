import React from 'react';
import NavCarrito from './NavCarrito';
import ModalCarrito from './Modal';
import { Background, Total, Footer} from '../styleds/CarritoStyled'
import { Link } from 'react-router-dom';

const Carrito = () => {
  return <Background>
      <NavCarrito />
      <ModalCarrito />
      <Total> <h3>Total</h3> <span>$50 MNX</span> </Total>
      <Link to="/pagar"><Footer> <button> Pagar </button>  </Footer></Link>
  </Background>;
};

export default Carrito;
