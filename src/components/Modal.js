import React, { useState } from 'react';
import Contador from './Contador'
import { Button, Modal } from 'react-bootstrap';
import {Cards, Info, Nombre, Cantidad, Precio, ImagenModal} from '../styleds/CarritoStyled'

const ModalCarrito = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return <div>
      <Button style={{background: "none", border:"0"}} onClick={handleShow}>
        <Cards>
            <img src="https://res.cloudinary.com/dvtpbvs4w/image/upload/v1643522517/Sprint-02/Guappjalota1.png" alt="Guappjolota-Verde" width="56" height="56"/>
            <Info>
                <Nombre>Guajalota de Tamal Verde</Nombre> <br/>
                <Cantidad>x2</Cantidad>
            </Info>
            <Precio>$50 MNX</Precio>
          </Cards>
      </Button>

      <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
            <Modal.Title>Guajalota de Tamal Verde</Modal.Title> <br/>
        </Modal.Header>
        
        <Modal.Body >
          <img style={{margin: "0 90px" }} src="https://res.cloudinary.com/dvtpbvs4w/image/upload/v1643522517/Sprint-02/Guappjalota1.png" alt="Guappjolota-Verde" width="100" height="100"/>
          <h2 style={{color: "tomato", textAlign: "center" }}>$50 MNX</h2>
          <div style={{textAlign: "center" }}>
            <Contador />
          </div>
              
        </Modal.Body>

        <Modal.Footer>
            <Button style={{background: "tomato", border:"0"}} onClick={handleClose}>
              Actualizar
            </Button>
            <Button style={{background: "none", color: "tomato", border:"0", display: "block"}} onClick={handleClose}>Cerrar</Button>
        </Modal.Footer>  

      </Modal>
  </div>;
};

export default ModalCarrito;
