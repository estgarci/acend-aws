import React, { useState } from 'react';
import {Collapse,Navbar,NavbarToggler,NavbarBrand,Nav,NavItem,NavLink} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const NavComponent = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
      <Navbar className="main-nav container-fluid pb-0 pt-0" light expand="md">
        <div class="container">
          <NavbarBrand id="title" href="/">
            Acend
          </NavbarBrand>
          <NavbarToggler onClick={toggle}/>
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem className="mr-4">
                <NavLink href="/components/"><FontAwesomeIcon className="mr-2" icon="globe-americas"></FontAwesomeIcon>English</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/"><FontAwesomeIcon className="mr-2" icon="sign-in-alt"></FontAwesomeIcon>Sign in</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </div>
      </Navbar>
  );
}

export default NavComponent;
