import React from 'react';
import Contador from './Contador';
import '../styleds/prducto.css';


const Producto = () => {

  return <div>
    <div className="container">
    <ul className="slides">
        <li id="slide1">
            <div>
                <img src="https://res.cloudinary.com/dvtpbvs4w/image/upload/v1643522517/Sprint-02/Guappjalota1.png" alt="" />
                <h1>Guajolota de <br/> Tamal Verde</h1>
                <span>$25 MXN</span>
            </div>
        </li>
        <li id="slide2">
            <div>
                <img src="https://res.cloudinary.com/dvtpbvs4w/image/upload/v1643474121/Sprint-02/Bebidas1_nvacus.png" alt="" />
                <h1>Guajolota de <br/> Tamal de Mole</h1>
                <span>$25 MXN</span>
            </div>
        </li>
        <li id="slide3">
            <div>
                <img src="https://res.cloudinary.com/dvtpbvs4w/image/upload/v1643474121/Sprint-02/Tamal1_mvwxla.png" alt="" width="16"/>
                <h1>Guajolota de <br/> Tamal de Guayaba</h1>
                <span>$25 MXN</span>
            </div>
        </li>

        <li id="slide4">
            <div>
                <img src="https://res.cloudinary.com/dvtpbvs4w/image/upload/v1643522517/Sprint-02/Guappjalota1.png" alt="" />
                <h1>Guajolota de <br/> Tamal de Piña</h1>
                <span>$2 MXN</span>
            </div>
        </li>

        <li id="slide5">
            <div>
                <img src="https://res.cloudinary.com/dvtpbvs4w/image/upload/v1643474121/Sprint-02/Bebidas1_nvacus.png" alt="" />
                <h1>Guajolota de <br/> Tamal de Pasas</h1>
                <span>$2 MXN</span>
            </div>
            </li>
    </ul>

   <Contador />
    <h6>Sabor</h6>
    

    <ul className="thumbnails">
            <li>
                <a href="#slide1"><img src="https://res.cloudinary.com/dvtpbvs4w/image/upload/v1643522517/Sprint-02/Guappjalota1.png" /></a>
            </li>
            <li>
                <a href="#slide2"><img src="https://res.cloudinary.com/dvtpbvs4w/image/upload/v1643474121/Sprint-02/Bebidas1_nvacus.png" /></a>
            </li>
            <li>
                <a href="#slide3"><img src="https://res.cloudinary.com/dvtpbvs4w/image/upload/v1643474121/Sprint-02/Tamal1_mvwxla.png" /></a>
            </li>

            <li>
                <a href="#slide4"><img src="https://res.cloudinary.com/dvtpbvs4w/image/upload/v1643522517/Sprint-02/Guappjalota1.png" /></a>
            </li>
            <li>
                <a href="#slide5"><img src="https://res.cloudinary.com/dvtpbvs4w/image/upload/v1643474121/Sprint-02/Bebidas1_nvacus.png" /></a>
            </li>
        
    </ul>
    </div>
  </div>;
};

export default Producto;
