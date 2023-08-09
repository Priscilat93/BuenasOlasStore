import React from "react";


import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FooterContainerStyled } from "./FooterStyles";

const Footer = () => {
  return (
   <FooterContainerStyled>
    <footer >
            <div class="footer">
                <div class="grupo-1">
                    <div class="box">
                        <div class="footer-name">
                        <h1>Buenas Olas Store</h1>
                        </div>
                        <div class="box">
                            <div class="redes">
                                <a href="#" className="fb"><FaFacebook/></a>
                                <a href="#" className="ig"><FaInstagramSquare/></a> 
                            </div>
                           
                        </div>
                    </div>
                </div>
                <div class="footer-links">
                  <a href="#">Términos y condiciones</a><a href="#">Cambios y devoluciones</a><a href="#">Cuidados</a><a href="#">Nosotros</a><a href="#">Contacto</a>
                </div>
                
                <div class="grupo-2">
                    
                    <small>&copy; 2023 <b>Buenas Olas Store - Mar del Plata BA-ARG</b> - Todos los derechos reservados. </small>
                </div>
    
            </div>
        </footer>

   </FooterContainerStyled>
  );
};
export default Footer;
