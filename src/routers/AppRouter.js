import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Carrito from '../components/Carrito';
import Home from '../components/Home';
// import {InfoProducto} from '../components/InfoProducto';


const AppRouter = () => {
  return <div>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/carrito" element={<Carrito />}/>
        </Routes>
      </BrowserRouter>
  </div>;
};

export default AppRouter;
