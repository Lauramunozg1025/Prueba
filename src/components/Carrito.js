import React from 'react';
import NavCarrito from './NavCarrito';
import { Background, Cards, Info, Nombre, Cantidad, Precio, Total, Footer, Modal, CloseModal} from '../styleds/CarritoStyled'

const Carrito = () => {
  return <Background>
      <NavCarrito />
      <a href='#openModal' id='vonculo-modal' >
        <Cards>
          <img src="https://res.cloudinary.com/dvtpbvs4w/image/upload/v1643522517/Sprint-02/Guappjalota1.png" alt="Guappjolota-Verde" width="56" height="56"/>
          <Info>
              <Nombre>Guajalota de Tamal Verde</Nombre> <br/>
              <Cantidad>x2</Cantidad>
          </Info>
          <Precio>$50 MNX</Precio>
        </Cards>
      </a>
      
      <Total> <h3>Total</h3> <span>$50 MNX</span> </Total>

      <Footer> <button> Pagar </button>  </Footer>


  </Background>;
};

export default Carrito;
