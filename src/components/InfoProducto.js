import React from 'react';
import Nav from './Navbar';
import Producto from './Producto';
import Guajolocombo from './Guajolocombo';
import styled from 'styled-components';
import {Link} from 'react-router-dom'

const Background = styled.div`
    background-color: #F2F2F2;
    /* height: 590px; */
    /* overflow: hidden; */
`

const Footer = styled.footer `
  background-color: #F2F2F2;
  text-align: center;
  position: sticky;
  bottom: 0;


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
        <Link to='/carrito'>
          <button>
            Agregar 1 al carrito <span>$14.00</span>
          </button>
        </Link>
      </Footer>
  </Background>);
};


  
