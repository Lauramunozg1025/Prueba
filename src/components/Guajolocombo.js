import React from 'react';
import {Div , DivSpan, H1, Span, DivProductos, DivProducto} from '../styleds/GuapjocomboStyle';

const Guajolocombo = () => {
  return <Div>
    <DivSpan>
      <H1>Guajolocombo</H1>
      <Span>Escoge la bebida que mas te guste y disfruta tu desayuno</Span>
    </DivSpan>
      
  <DivProductos>

    {/* aqui se pintarian el producto que compone el combo */}
    <DivProducto>
          <img src="https://res.cloudinary.com/dvtpbvs4w/image/upload/v1643474121/Sprint-02/Bebidas1_nvacus.png" alt="Guappjolota-Verde" width="64" height="64"/>
          <input type="radio" name='guajolocombo' /> <br/>
          <b>Champurrado</b> <br/>
          <span>+ $12 MXN</span>
      </DivProducto>
  </DivProductos>
  </Div>
};

export default Guajolocombo;
