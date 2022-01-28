import React from 'react';
import { ButtonForm, CampoDiv, InputForm, LoginDiv, LogoDiv } from '../styles/LoginStyles';

const Login = () => {
  return (
    <LoginDiv>
        <LogoDiv>
            <img src="https://res.cloudinary.com/karma09-jm/image/upload/v1643347552/Guappjolotas/logo_gndgre.svg" alt="Logo" width={150}/>
        </LogoDiv>
        <form action="">
            <CampoDiv>
                <i className="bi bi-person"></i>
                <InputForm type="text" name="usuario" placeholder='Usuario' required />
            </CampoDiv>
            <CampoDiv>
                <i class="bi bi-lock"></i>
                <InputForm type="password" name="password" placeholder='Contraseña' required />
            </CampoDiv>
            <ButtonForm type="submit">Iniciar Sesión</ButtonForm>
        </form>
    </LoginDiv>
  );
};

export default Login;
