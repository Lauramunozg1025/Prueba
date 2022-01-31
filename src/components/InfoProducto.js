import React from 'react';
import Nav from './Navbar';
import Producto from './Producto';
import Guajolocombo from './Guajolocombo';
import styled from 'styled-components';

const Background = styled.div`
    background-color: #F2F2F2;
    width: 100%;
    height: 100%;
    min-height: 100%;
    overflow: hidden;
`

const Footer = styled.footer `
  text-align: center;


  & button {
    background-color: tomato;
    border-radius: 20px;
    width: 312px;
    height: 59px;
    font-size: 17px;
    color: white;
    margin: 16px auto;
  }

  & button span {
    float: right;
    margin-right: 10px;
  }
`

export const InfoProducto = () => {
  return (
  <Background>
      <Nav />
      <Producto />
      <Guajolocombo />
      <Footer>
        <button>
          Agregar 1 al carrito <span>$14.00</span>
        </button>
      </Footer>
  </Background>);
};


  
