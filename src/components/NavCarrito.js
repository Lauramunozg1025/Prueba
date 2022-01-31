import React from 'react';
import {Navbar, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const NavCarrito = () => {
  return <div>
      <Navbar>
          <Container>
          <Navbar.Text>
                <Link to="/home">
                <svg width="24" height="24" fill="black" class="bi bi-chevron-left" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                </svg>
                </Link>
              </Navbar.Text>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-center">
              <Navbar.Text>
                <b>Carrito</b>
              </Navbar.Text>
            </Navbar.Collapse>
          </Container>
        </Navbar>
  </div>;
};

export default NavCarrito;
