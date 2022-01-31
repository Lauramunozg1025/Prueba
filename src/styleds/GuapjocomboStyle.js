import styled from 'styled-components';

export const Div= styled.div `
  margin: 10px;
`

export const DivSpan = styled.div `
  margin-bottom: 24px;
`

export const H1 = styled.h2 `
  font-size: 20px;
`

export const Span = styled.span `
  font-size: 16px;
  color: black;
  opacity: 0.5;
`

export const DivProductos = styled.div`
  display: inline-flex;
  flex-direction: row;
  flex-wrap: wrap;

`

export const DivProducto = styled.div `
  background-color: white;
  text-align: center;
  width: 152px;
  height: 138px;
  border-radius: 20px;
  margin: 8px;

  & b {
    font-size: 12px;
  }

  & span {
    font-size: 12px;
    font-weight: 600;
    color: tomato;

  }

`