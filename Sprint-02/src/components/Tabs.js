import React, { useState } from "react";
import "../styleds/Tab.css";
import styled from 'styled-components'
import {Link} from 'react-router-dom'

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

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="container">

      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          Guajolotas
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          Bebidas
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          Tamales
        </button>
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          <Link to='/info-producto' style={{textDecoration: "none"}}>
              <DivProducto>
                <img src="https://res.cloudinary.com/dvtpbvs4w/image/upload/v1643522517/Sprint-02/Guappjalota1.png" alt="Guappjolota-Verde" width="80" height="80"/>
                <InfoProducto>
                  <h5>Verde</h5>
                  <span>$25 MXN</span>
                </InfoProducto>
              </DivProducto>
          </Link>

        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
                    <DivProducto>
            <img src="https://res.cloudinary.com/dvtpbvs4w/image/upload/v1643474121/Sprint-02/Bebidas1_nvacus.png" alt="Guappjolota-Verde" width="80" height="80"/>
            <InfoProducto>
              <h5>Champurrado</h5>
              <span>$12 MXN</span>
            </InfoProducto>
          </DivProducto>
        </div>

        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
                    <DivProducto>
            <img src="https://res.cloudinary.com/dvtpbvs4w/image/upload/v1643474121/Sprint-02/Tamal1_mvwxla.png" alt="Guappjolota-Verde" width="80" height="80"/>
            <InfoProducto>
              <h5>Verde</h5>
              <span>$14 MXN</span>
            </InfoProducto>
          </DivProducto>
        </div>
      </div>
    </div>
  );
}

export default Tabs;