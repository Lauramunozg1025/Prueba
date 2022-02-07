import React, { useState } from 'react';
import styled from 'styled-components';

const DivContador = styled.div `
  width: 190px;
  height: 72px;
  border-radius: 20px;
  border: 0;
  background-color: white;
  text-align: center;
  display: inline-flex;

  & h1 {
    margin: 30px;
    font-size: 22px;
  }

  & bottom:hover {
    fill: black;
  }


`

const Contador = () => {

  const [contador, setContador] = useState(1);

  const handleAdd = () => {
    setContador(contador + 1)
  }

  const handleRest = () => {
    setContador(contador - 1)
  }

  return <DivContador>
    <button onClick={handleRest}> 
    <svg width="40" height="40" fill="currentColor" class="bi bi-dash-circle" viewBox="0 0 16 16">
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
        <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
      </svg>
    </button>
    <h1>{contador} </h1>
    <button onClick={handleAdd} >
    <svg width="40" height="40" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16">
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
      </svg> 
    </button>

  </DivContador>;
};

export default Contador;
