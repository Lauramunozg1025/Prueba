import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Nav from './NavPrincipal';
import Tabs from './Tabs';

const Background = styled.div`
    background-color: #F2F2F2;
    height: 590px;
    overflow-y: auto;
    overflow-x: hidden;
`

const DivHeader = styled.div`
  text-align: center;
  margin-bottom: 40px;
`

const H1 = styled.h1 `
  font-size: 30px;
  font-weight:bold;
  padding: 15px 10px;
`

// const InputSearch = styled.input`
//   width: 80%;
//   height: 50px;
//   background-color: rgba(58, 58, 58, 0.110);
//   border-radius: 50px;
//   border: 0;
//   text-align: center;
//   text-overflow: ellipsis;
//   font-size: 17px;
//   margin-top: 20px;
// `

const DivImg = styled.div `
  width: 360px; 
  height: 590px;
  background: #F2F2F2;
  position: absolute;
  z-index: -2;
  opacity: 0;
  animation-name: backgroundImg;
  animation-duration: 3s;
  animation-iteration-count: 1;

  @keyframes backgroundImg {
    55%{opacity: 100%; z-index: 2; }
    60%{opacity: 80%; z-index: 2;}
    100%{z-index: 2;}
  }
`

const Img = styled.img`
    width: 66px;
    height: 66px; 
    opacity: 0;
    position: absolute;
    z-index: 1;
    animation-name: inicio;
    animation-duration: 3s;
    animation-timing-function: ease;
    animation-iteration-count: 1;

    @keyframes inicio {
      0% {width: 360px; height: 360px; margin: 25% 0; opacity: 100}
      50% {width: 360px; height: 360px; margin: 25% 0; opacity: 100}
      60% {width: 160px; height: 160px;}
      90% {width: 64px; height: 64px; margin-top: 12px; margin-left: 10.5px;}
      100% {width: 64px; height: 64px; margin-top: 12px; margin-left: 10.5px;}
    }
`

const DivSearch = styled.div`
  width: 80%;
  height: 50px;
  background-color: rgba(58, 58, 58, 0.110);
  border-radius: 50px;
  border: 0;
  text-align: center;
  text-overflow: ellipsis;
  font-size: 17px;
  margin: 20px auto;
`

const InputSearch = styled.input`
  background: none;
  border-radius: 50px;
  border: 0;
  text-overflow: ellipsis;
  font-size: 17px;
  margin: 10px;
  outline: none;
`

export default class Home extends Component {
  render() {
    return (
      <Background>
        <DivImg>
          <Img src="https://res.cloudinary.com/dvtpbvs4w/image/upload/v1643474113/Sprint-02/logo_gpefvc.png" alt="imagen de incio" />
        </DivImg>
      <Nav />
      <DivHeader>
        <H1>Nada como una Guapjalota para empezar el dia</H1>
        <Link to="/search" style={{color: "black"}}>
          <DivSearch>
            <svg width="17" height="17" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
            </svg>
            <InputSearch placeholder='Sabor de guajolota, bebida o tamal' />
          </DivSearch>
        </Link>
      </DivHeader>
      <Tabs />
  </Background>);
  }
}
