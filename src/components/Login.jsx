import React, { Component } from 'react';
import { ButtonForm, CampoDiv, InputForm, LinkForm, LoginDiv, LogoDiv } from '../styleds/LoginStyles';
import Swal from 'sweetalert2'
import axios from 'axios';

export default class Login extends Component {
    constructor() {
        super();
        this.state = {
            form: {
                nombre_usuario: "",
                contraseña: ""
            }
        }
    }


    handleSubmit = (e) => {
        e.preventDefault();
        this.IniciarSesion();
    }

    handleInputChange =  ({target}) => {
        this.setState({
            form: {
                ...this.state.form,
                [target.name]: target.value
            }
        });
    }

    IniciarSesion = async () => {
        await axios.get('https://guappjolotas-users.herokuapp.com/usuarios/', {
            params: {
                nombre_usuario: this.state.form.nombre_usuario,
                contraseña: this.state.form.contraseña
            }
        })
        .then(resp => {
            const usuario = resp.data
            const usuarioIsReal = usuario.find((user) => user.nombre_usuario === this.state.form.nombre_usuario)
            console.log(usuarioIsReal);

            if (usuarioIsReal === undefined) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'El usuario o contraseña es incorrecto!',
                  })
            }
            else if (usuarioIsReal !== "") {
                if (usuarioIsReal.contraseña === this.state.form.contraseña) {
                    localStorage.setItem('Usuario', usuarioIsReal.nombre_usuario)
                    window.location.href = "/home"

                }
                else if(usuarioIsReal.contraseña !== this.state.form.contraseña){
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'El usuario o contraseña es incorrecto',
                      })
                }
            }
        })
        .catch(error => {
            console.log(error);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Hubo un error!',
              })
        })
    }

    render(){
        return (
          <LoginDiv>
              <LogoDiv>
                  <img src="https://res.cloudinary.com/karma09-jm/image/upload/v1643347552/Guappjolotas/logo_gndgre.svg" alt="Logo" width={150}/>
              </LogoDiv>
              <form onSubmit={this.handleSubmit}>
                  <CampoDiv>
                      <i className="bi bi-person"></i>
                      <InputForm 
                          type="text" 
                          name="nombre_usuario" 
                          placeholder='Usuario' 
                          value={this.state.form.nombre_usuario} 
                          onChange={this.handleInputChange} 
                          required 
                      />
                  </CampoDiv>
                  <CampoDiv>
                      <i className="bi bi-lock"></i>
                      <InputForm 
                          type="password" 
                          name="contraseña" 
                          placeholder='Contraseña' 
                          value={this.state.form.contraseña} 
                          onChange={this.handleInputChange} 
                          required 
                      />
                  </CampoDiv>
                  <ButtonForm type="submit">Iniciar Sesión</ButtonForm>
              </form>
              <LinkForm>
                <a href="/registro">No tengo una cuenta</a>
            </LinkForm>
          </LoginDiv>
        );

    }
};
