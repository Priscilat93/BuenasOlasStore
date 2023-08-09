import React from "react";
import { RiShoppingCartLine } from "react-icons/ri";
import {AiOutlineBars } from "react-icons/ai"
/* import { logoImg } from "../../../public/assets/images/bo_Logo.png"; */
import {
  NavbarContainerStyled,
  ContenedorNavbarStyled,
  LogoContainerImg,
  NavLinksContainer,
} from "./NavbarStyles";


const Navbar = () => {
  return (
    <NavbarContainerStyled>
      <ContenedorNavbarStyled>
        <LogoContainerImg>
          <div>
            <a href="index.html">
              <img src={`../public/bo_Logo.png`}
             alt="logo-image" />
            </a>
          </div>
          <a href="index.html">
            <h1>
              Buenas Olas<span>Store</span>
            </h1>
          </a>
        </LogoContainerImg>
        <NavLinksContainer>
          <NavLinksContainer>
            <li>
              <a href="#destacados">Destacados</a>
            </li>
            <li>Productos</li>
            <li>Nosotros</li>
            <li>Contacto</li>
            <a href="#" className="menu-icon"><AiOutlineBars/></a>
            <a href="#" className="cart-icon"><RiShoppingCartLine/></a>
          </NavLinksContainer>
        </NavLinksContainer>
      </ContenedorNavbarStyled>
      
    </NavbarContainerStyled>
  );
};

export default Navbar;
