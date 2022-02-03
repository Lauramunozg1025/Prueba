import React from 'react';
import { Background, H1, FormCampo, FormInput, Button } from '../styleds/PagoStyleds';
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom';

const Pago = () => {
  return (
      <Background className="m-3 p-2">
          <H1>Pagos</H1>
          <form>
            <FormCampo>
                <FormInput 
                    type="text" 
                    name="nombre"
                    placeholder='Nombre'
                />
            </FormCampo>
            <FormCampo>
                <Row>

                    <Col xs={12}>    
                        <FormInput 
                        
                            type="text" 
                            name="numTarjeta"
                            placeholder='Número de tarjeta'
                        />
                    </Col>
                    <Col xs={6}>    
                        <FormInput 
                            type="text" 
                            name="fecha"
                            placeholder='MM/YY'
                        />
                    </Col>
                    <Col xs={6}>    
                        <FormInput 
                            type="text" 
                            name="cvc"
                            placeholder='CVC'
                        />
                    </Col>
                </Row>
            </FormCampo>
            <FormCampo>
            <FormInput 
                    type="email" 
                    name="email"
                    placeholder='Correo Electrónico'
                />
            </FormCampo>
            <FormCampo>
                <Button type="submit">
                    Pagar
                </Button>
                <Link to="/carrito">
                    <Button type="submit">
                        Cancelar
                    </Button>
                </Link>
            </FormCampo>
                
            
          </form>
      </Background>
  );
};

export default Pago;
