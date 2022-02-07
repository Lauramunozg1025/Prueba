import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Background = styled.div`
    background-color: #F2F2F2;
    height: 590px;
    text-align: center;
    overflow-y: auto;
    overflow-x: hidden;
`

const DivSearch = styled.div`
  width: 70%;
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
  font-size: 15px;
  margin: 10px;
  outline: none;
`

const DivProducto = styled.div`
  background-color: white;
  border-radius: 20PX;
  margin: auto;
  margin-bottom: 8px;
  width: 312px;
  height: 112px;
  display: flex;

  & img{
    margin: 16px;
  }
`

const InfoProducto = styled.div`
  margin: auto 16px;

  & h5 {
    font-size: 17px;
    font-weight: 600;
    color: black;
  }

  & span {
    font-size: 14px;
    color: tomato;
  }
`



const Search = () => {

  const [busqueda, setBusqueda] = useState("");
  const [producto, setProducto] = useState([]);
  const [sabor, setSabor] = useState([]);

  useEffect(() => {
    getProducto()
  }, []);

  const getProducto = async() => {
    const respGuappjolotas = await (await fetch('https://guappjolotas-users.herokuapp.com/guappjolotas')).json()
    const respBebidas = await (await fetch('https://guappjolotas-users.herokuapp.com/bebidas')).json()
    const respTamales = await (await fetch('https://guappjolotas-users.herokuapp.com/Tamales')).json()
     const data =  respGuappjolotas.concat(respBebidas, respTamales)
    //  setSabor(data)
    setSabor(data)
  }
  

  const handleInputChange = (e) => {
    const textBusqueda = e.target.value
    setBusqueda(textBusqueda);
    setProducto(textBusqueda);
    filter(textBusqueda);
  }

  const filter = (productoBusqueda) => {
    let resultadoBusqueda = sabor.filter((elemento)=> {
      if (productoBusqueda == ""){
        return ("")
      }else {
        if(elemento.sabor.toString().toLowerCase().includes(productoBusqueda.toLowerCase()))
        {
          return elemento;
        }
      }
      
    })
    setProducto(resultadoBusqueda)

  };

  


  return <Background>

 <div style={{display: "flex", margin:"15px"}}>
  <DivSearch>
      <svg width="17" height="17" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
      </svg>
      <InputSearch value={busqueda}  placeholder='Sabor de guajolota, bebida o tamal' onChange={handleInputChange} />
    </DivSearch>
    <Link to="/home" style={{fontSize:"16px", margin:"auto", color:"black", textDecoration: "none"}}>Cancelar</Link>
 </div>

  <div style={{margin: "auto"}}>
    {
        producto.map(product =>(
          <Link to='/info-producto' style={{textDecoration: "none"}} key={product.id}>
            <DivProducto>
              <img src={product.imagen} alt="Guappjolota-Verde" width="80" height="80" name="img" />
              <InfoProducto>
                <h5>{product.sabor}</h5>
                <span>${product.precio} MXN</span>
              </InfoProducto>
            </DivProducto>
          </Link>
      ))
    }
  </div>
  
  </Background>;
};

export default Search;
