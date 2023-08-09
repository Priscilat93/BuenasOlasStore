import styled from "styled-components";

export const NavbarContainerStyled = styled.header`
  width: 100vw;
  height: 60px;
  background: #f9e9d8;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: fixed;
  z-index: 1;
  box-shadow: 5px 5px 35px #6e6043;
`;

export const ContenedorNavbarStyled = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  z-index: 2;
  line-height: 1.6;
  letter-spacing: 1px;
  background: #f9e9d8;
  padding: 15px;
  padding-bottom: 0;
  height: 60px;
  overflow: hidden;
`;
export const LogoContainerImg = styled.div`
  display: flex;
  gap: 10px;
  img {
    width: 90px;
    height: 60px;
    object-position: center;
  }
  h1 {
    font-family: var(--secondaryFont);
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  span {
    font-family: "Edu SA Beginner", sans-serif;
    font-weight: 700;
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    margin-left: 0;
  }
`;

export const NavLinksContainer = styled.nav`
  nav {
    display: flex;
    gap: 15px;
    font-family: var(--extraFont);
    font-weight: 500;
   margin-right: 0;
   transition: all ease-in-out .3s;
  }
  nav .nav-links {
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: var(--extraFont);
    font-weight: 700;
    transition: all ease 0.3s;
  }
  .menu-icon{
    display: none;
  }
  .cart-icon{
     font-size: 25px;
     transition: all ease-in-out .3s;
     text-align: center;
     top: 0;
    }
  .cart-icon:hover {
    color: coral;
    transform:  rotate(3deg);
    
  }
  nav li:hover {
    cursor: pointer;
    color: #6e6043;
    border-bottom:.5rem solid #6e6043;

  }

  @media (max-width: 980px) {
    nav li {
      display: none;
    }
    .menu-icon{
      display: flex;
      font-size: 25px;
    }
    
  }
`;
