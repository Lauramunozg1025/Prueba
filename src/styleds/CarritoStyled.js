import styled from "styled-components";

export const Background = styled.div`
    background-color: #F2F2F2;
    height: 100vh;
    min-height: 100%;
    overflow: hidden;
    position: relative;

    & a{
        text-decoration: none;
    }
`

export const Cards = styled.div `
    display: flex;
    width: 100%;
    height: 56px;
    margin: 15px;
`

export const Info = styled.div`
    width: 152px;
    height: 132px;
    position: static;
    margin: auto 25px;
`

export const Nombre = styled.label `
    font-size: 12px;
    color: black;
`

export const Cantidad = styled.span `
    font-size: 12px;
    color: tomato;
`

export const Precio = styled.h5`
    font-size: 14px;
    color: tomato;
    margin: auto 0;
`

export const Total = styled.div`
    background: white;
    border-radius: 20px;
    margin: auto;
    width: 312px;
    height: 53px;
    display: flex;

    & h3 {
        font-size: 17px;
        margin: auto 25px;
    }

    & span {
        float: right;
        color: tomato;
        margin: auto 0;
        margin-left: 120px;
        
    }
`

export const Footer = styled.footer `
  position: absolute;
  bottom: 0;


  & button {
    background-color: tomato;
    border-radius: 20px;
    width: 312px;
    height: 59px;
    font-size: 17px;
    color: white;
    margin: 16px 24px;
  }

`

export const ImagenModal = styled.img`
    background: black;
    
`





