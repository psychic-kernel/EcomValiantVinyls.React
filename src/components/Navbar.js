import { useState } from "react";
import {
  Navbar as BSNavbar,
  NavbarBrand,
  NavbarToggler,
  NavLink,
  Nav,
  NavItem,
  Collapse,
} from "reactstrap";

const Navbar = () => {
  const [collapsed, setCollapsed] = useState(true);
  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <>
      <BSNavbar className="navbar">
        <NavbarBrand href="/" className="me-auto">
          <div className="title-container">
            <img className="brand-logo"
              alt="logo"
              src="/logo.png"
              style={{
                height: 90,
                width: 90,
                marginRight: 95 + "%",
              }}
            />  
          <h1 className="title">Valiant Vinyls</h1>
          </div>
        </NavbarBrand>
        {/** toggleNavbar(w/parenthesis) => Err msg:
         * too many renders
         * React limits the number of renders to prevent an infinite loop
         */}
        <NavbarToggler  onClick={toggleNavbar} className="me-2 border border-success bg-success" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="guide" className="text-info">Guide</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </BSNavbar>
      <ul className="nav">
        <li className="nav-item">
          <a href="/">Home</a>
        </li>
        <li className="nav-item">
          <a href="about">About</a>
        </li>
        <li className="nav-item">
          <a href="contact">Contact</a>
        </li>
        <li className="nav-item">
          <a href="inventory">Inventory</a>
        </li>
      </ul>
    </>
  );
};
export default Navbar;
