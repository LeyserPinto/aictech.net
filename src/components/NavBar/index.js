import React from "react";

import { FaFacebookF, FaInstagram, FaWhatsapp, FaBars } from "react-icons/fa";
import {
  NavHeader,
  Nav,
  NavLogo,
  Logo,
  NavMenu,
  NavItem,
  NavLink,
  Elink,
  MobileIcon,
} from "./NavElements";

import AictechLogo from "../../images/Aictech.png";

const NavBar = () => {
  return (
    <>
      <NavHeader>
        <Nav>
          <NavLogo>
            <Logo src={AictechLogo} />
          </NavLogo>

          <NavMenu>
            <NavItem>
              <NavLink to="/">Inicio</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/">Nosotros</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/">Servicios</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/">Proyectos</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/">Productos</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/">Soluciones</NavLink>
            </NavItem>

            <NavItem>
              <NavLink to="/">Contacto</NavLink>
            </NavItem>
            <NavItem>
              <Elink href="https://www.facebook.com">
                <FaFacebookF />
              </Elink>
            </NavItem>
            <NavItem>
              <Elink href="https://www.instagram.com">
                <FaInstagram />
              </Elink>
            </NavItem>
            <NavItem>
              <Elink href="https://wa.me/584148366073">
                <FaWhatsapp />
              </Elink>
            </NavItem>
          </NavMenu>
          <MobileIcon>
            <FaBars />
          </MobileIcon>
        </Nav>
      </NavHeader>
    </>
  );
};

export default NavBar;
