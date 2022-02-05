import React, { useEffect, useState } from "react";
import "../styleds/Tab.css";
import {Link} from 'react-router-dom'
import styled from "styled-components";
import { urlGuappjolotas, urlTamales, urlBebidas } from '../helpers/url'


const DivProducto = styled.div`
  background-color: white;
  border-radius: 20PX;
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

function Tabs() {
  const [toggleState, setToggleState] = useState(1);
  const [guappjolotas, setGuappjolotas] = useState([]);
  const [tamales, setTamales] = useState([]);
  const [bebidas, setBebidas] = useState([]);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const handleCapturarDatos = async ({ target }) => {
    console.log( target );

  }

  useEffect(() => {
    getGuappjolotas()
    getTamales()
    getBebida()
  }, [])

  const getGuappjolotas = async() => {
    const resp = await fetch(urlGuappjolotas)
    const data = await resp.json()
    setGuappjolotas(data)
}

const getTamales = async() => {
  const resp = await fetch(urlTamales)
  const data = await resp.json()
  setTamales(data)
}

const getBebida = async() => {
  const resp = await fetch(urlBebidas)
  const data = await resp.json()
  setBebidas(data)
}




  return (
    
    <div className="container">
      {/* Este es el tab del home que pasa por los productos guappjolotas , bebidas y tamales y los pinta aparte */}
      <div className="bloc-tabs">
        <button className={toggleState === 1 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(1)} >
          Guajolotas
        </button>
        <button className={toggleState === 2 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(2)} >
          Bebidas
        </button>
        <button className={toggleState === 3 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(3)} >
          Tamales
        </button>
      </div>

      <div className="content-tabs" onClick={handleCapturarDatos}>
        <div className={toggleState === 1 ? "content  active-content" : "content"}  >
          {/* Aqui en este link se pintan los productos guappjolotas del home */}

          {
            guappjolotas.map(producto => (
              <Link to='/info-producto' style={{textDecoration: "none"}} key={producto.id}>
                <DivProducto>
                  <img src={producto.imagen} alt="Guappjolota-Verde" width="80" height="80" name="img" />
                  <InfoProducto>
                    <h5>{producto.sabor}</h5>
                    <span>${producto.precio} MXN</span>
                  </InfoProducto>
                </DivProducto>
              </Link>
            ))
          }

        </div>

        <div className={toggleState === 2 ? "content  active-content" : "content"} >
           {/* Aqui en este link se pintan los productos Bebidas del home */}
            {
              bebidas.map (producto => (
                <Link to='/info-producto' style={{textDecoration: "none"}} key={producto.id}>
                <DivProducto>
                  <img src={producto.imagen} alt="Guappjolota-Verde" width="80" height="80"/>
                  <InfoProducto>
                    <h5>{producto.sabor}</h5>
                    <span>${producto.precio} MXN</span>
                  </InfoProducto>
                </DivProducto>
              </Link>
              ))
            }
        </div>

        <div className={toggleState === 3 ? "content  active-content" : "content"} >
           {/* Aqui en este link se pintan los productos tamales del home */}
           {
            tamales.map(producto => (
              <Link to="/info-producto" style={{textDecoration: "none"}} key={producto.id}>
              <DivProducto>
                <img src={producto.imagen} alt="Guappjolota-Verde" width="80" height="80"/>
                <InfoProducto>
                  <h5>Tamal de {producto.sabor}</h5>
                  <span>${producto.precio} MXN</span>
                </InfoProducto>
              </DivProducto>
            </Link>
            ))
           }
            
        </div>
      </div>
    </div>
  );
}

export default Tabs;