import React from 'react';
import Contador from './Contador';
import {Container, Slides, Thumbnails } from '../styleds/ProductoStyled'


const Producto = () => {

  return <div>
    <Container>
        {/* aqui en el slider se pintan todos los productos con informacion  */}
        <Slides>
            <li id="slide1">
                <div>
                    <img src="https://res.cloudinary.com/dvtpbvs4w/image/upload/v1643522517/Sprint-02/Guappjalota1.png" alt="Producto" />
                    <h1>Guajolota de <br/> Tamal Verde</h1>
                    <span>$25 MXN</span>
                </div>
            </li>
            
        </Slides>

        <Contador /> <br/>
        <h6 style={{margin: "20px", float: "left"}}>Sabor</h6><br/><br/><br/>
        
        {/* Aqui se pintarian los sabores */}
        <Thumbnails>
                <li>
                    <a href="#slide1"><img src="https://res.cloudinary.com/dvtpbvs4w/image/upload/v1643522517/Sprint-02/Guappjalota1.png" alt="sabor" /></a>
                </li>
            
        </Thumbnails>
    </Container>
  </div>;
};

export default Producto;
