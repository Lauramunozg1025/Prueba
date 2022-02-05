import React, { useState } from 'react';
import { ButtonForm, CampoDiv, InputForm, LinkForm, LogoDiv, RegistroDiv } from '../styleds/LoginStyles';
import axios from 'axios';
import Swal from 'sweetalert2';
import { urlUsuarios } from '../helpers/url'

const Registro = () => {

    const [registro, setRegistro] =  useState({
        nombre: '',
        correo: '',
        nombre_usuario: '',
        contraseña: ''
    });

    const { nombre, correo, nombre_usuario, contraseña } = registro;

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const handleInputChange = ({target}) => {
        setRegistro({
            ...registro,
            [target.name]: target.value
        })
    }

    const postData = () => {
        if (nombre === "" || correo === "" || nombre_usuario === "" || contraseña === "") {
            Swal.fire({
                title: 'Atención!',
                text: "Debe llenar todos los campos!",
                icon: 'warning',
              })
        }
        else {
            axios.post(urlUsuarios, registro)
                .then(resp => {
                    Swal.fire({
                        icon: 'success',
                        title: 'La cuenta ha sido creada!',
                      })
                    console.log(resp.data);
                })
                .catch(error => console.log(error))
        }
    }

    return (
        <RegistroDiv>
            <LogoDiv>
                <img src="https://res.cloudinary.com/karma09-jm/image/upload/v1643347552/Guappjolotas/logo_gndgre.svg" alt="Logo" width={150} />
            </LogoDiv>
            <form onSubmit={handleSubmit}>
                <CampoDiv>
                    <i className="bi bi-person-circle"></i>
                    <InputForm
                        type="text"
                        name="nombre"
                        placeholder='Nombre'
                        value={nombre}
                        onChange={handleInputChange}
                        required
                    />
                </CampoDiv>
                <CampoDiv>
                    <i className="bi bi-at"></i>
                    <InputForm
                        type="email"
                        name="correo"
                        placeholder='Correo Electronico'
                        value={correo}
                        onChange={handleInputChange}
                        required
                    />
                </CampoDiv>
                <CampoDiv>
                    <i className="bi bi-person"></i>
                    <InputForm
                        type="text"
                        name="nombre_usuario"
                        placeholder='Nombre de Usuario'
                        value={nombre_usuario}
                        onChange={handleInputChange}
                        required
                    />
                </CampoDiv>
                <CampoDiv>
                    <i className="bi bi-lock"></i>
                    <InputForm
                        type="password"
                        name="contraseña"
                        placeholder='Contraseña'
                        value={contraseña}
                        onChange={handleInputChange}
                        required
                    />
                </CampoDiv>
                <ButtonForm type="submit" onClick={() => postData()}>Registrarse</ButtonForm>
            </form>
            <LinkForm>
                <a href="/">Ya tengo una cuenta</a>
            </LinkForm>
        </RegistroDiv>
    );
};

export default Registro;

// 03145221435