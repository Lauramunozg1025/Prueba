import React from 'react';
import NavCarrito from './NavCarrito';
import ModalCarrito from './Modal';
import { Background, Total, Footer} from '../styleds/CarritoStyled'

const Carrito = () => {
  return <Background>
      <NavCarrito />
      <ModalCarrito />
      <Total> <h3>Total</h3> <span>$50 MNX</span> </Total>
      <Footer> <button> Pagar </button>  </Footer>
  </Background>;
};

export default Carrito;
