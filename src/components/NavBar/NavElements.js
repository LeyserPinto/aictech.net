import { Link as LinkN } from "react-router-dom";
import styled from "styled-components";

//
/*CONTENEDOR*/
//
//
//
//
export const NavHeader = styled.header`
  width: 100vw;
  height: 80px;
  //border: 1px solid #0c0c0c;
`;

/************************************************************ */
/**************************Grid***************************** */
/************************************************************ */
export const Nav = styled.nav`
  max-width: 1480px;
  width: 100%;
  height: 100%;
  //border: 1px solid #0c0c0c;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: auto;
`;

/************************************************************ */
/**************************Logo***************************** */
/************************************************************ */
export const NavLogo = styled.div`
  padding: 10px;
  height: 100%;
  margin: auto 0;
  cursor: pointer;
`;
export const Logo = styled.img`
  width: 200px;
`;

/************************************************************ */
/**************************Links***************************** */
/************************************************************ */
export const NavMenu = styled.ul`
  margin: auto 0;
  height: calc(100% - 20px);
  padding: 10px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  list-style: none;

  @media screen and (max-width: 890px) {
    display: none;
    transition: all 0.2s ease-in-out;
  }
`;

export const NavItem = styled.li`
  margin-right: 20px;
`;

export const NavLink = styled(LinkN)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #00152f;
  transition: all 0.2s ease-in-out;
  &:hover,
  :active {
    color: #efad15;
    transform: scale(1.2);
  }
`;
export const Elink = styled.a`
  height: 100%;
  color: #00152f;
  display: flex;
  align-items: center;

  transition: all 0.2s ease-in-out;

  &:hover,
  :active {
    color: #efad15;
    transform: scale(1.2);
  }
`;

/************************************************************ */
/**************************Mobile FaBars********************* */
/************************************************************ */
export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 890px) {
    display: block;
    color: #00152f;
    position: absolute;
    top: 3%;
    right: 5%;
    transform: scale(2);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;
