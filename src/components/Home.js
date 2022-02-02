import React, { Component } from 'react';
import styled from 'styled-components';
import Nav from './NavPrincipal';
import Tabs from './Tabs';

const Background = styled.div`
    background-color: #F2F2F2;
    height: 590px;
    overflow: hidden;
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

const InputSearch = styled.input`
  width: 80%;
  height: 50px;
  background-color: rgba(58, 58, 58, 0.110);
  border-radius: 50px;
  border: 0;
  text-align: center;
  text-overflow: ellipsis;
  font-size: 17px;
  margin-top: 20px;
`

export default class Home extends Component {
  render() {
    return (
      <Background>
      <Nav />
      <DivHeader>
        <H1>Nada como una Guapjalota para empezar el dia</H1>
        <InputSearch placeholder='Sabor de guajolota, bebida o tamal'/>
      </DivHeader>
      <Tabs />
  </Background>);
  }
}
