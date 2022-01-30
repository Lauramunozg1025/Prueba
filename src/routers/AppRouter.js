import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from '../components/Home';
import InfoProducto from '../components/InfoProducto';


const AppRouter = () => {
  return <div>
      <BrowserRouter>
        <Routes>
            <Route path="/home" element={<Home/>}/>
            <Route path="/" element={<InfoProducto />}/>
        </Routes>
      </BrowserRouter>
  </div>;
};

export default AppRouter;
