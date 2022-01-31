import React from 'react';
import Contador from './Contador';
import '../styleds/prducto.css';


const Producto = () => {

  return <div>
    <div class="container">
    <ul class="slides">
        <li id="slide1">
            <img src="https://res.cloudinary.com/dvtpbvs4w/image/upload/v1643522517/Sprint-02/Guappjalota1.png" alt="" />
            <h1>Guajolota de <br/> Tamal Verde</h1>
            <span>$25 MXN</span>
        </li>
        <li id="slide2">
            <img src="https://res.cloudinary.com/dvtpbvs4w/image/upload/v1643474121/Sprint-02/Bebidas1_nvacus.png" alt="" />
            <h1>Guajolota de <br/> Tamal de Mole</h1>
            <span>$25 MXN</span>
        </li>
        <li id="slide3">
            <img src="https://res.cloudinary.com/dvtpbvs4w/image/upload/v1643474121/Sprint-02/Tamal1_mvwxla.png" alt="" width="16"/>
            <h1>Guajolota de <br/> Tamal de Guayaba</h1>
            <span>$25 MXN</span>
        </li>

        <li id="slide4">
            <img src="https://res.cloudinary.com/dvtpbvs4w/image/upload/v1643522517/Sprint-02/Guappjalota1.png" alt="" />
            <h1>Guajolota de <br/> Tamal de Piña</h1>
            <span>$2 MXN</span>
        </li>

        <li id="slide5">
            <img src="https://res.cloudinary.com/dvtpbvs4w/image/upload/v1643474121/Sprint-02/Bebidas1_nvacus.png" alt="" />
            <h1>Guajolota de <br/> Tamal de Pasas</h1>
            <span>$2 MXN</span>
            </li>
    </ul>

   <Contador />
    <h6>Sabor</h6>
    

    <ul class="thumbnails">
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
