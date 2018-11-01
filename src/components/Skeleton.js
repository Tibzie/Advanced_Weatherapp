import React from 'react';
import { Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink } from 'reactstrap';

export default class Skeleton extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
         <Navbar color="dark" dark expand="md">
           <NavbarBrand href="/">AWP - Awesome Weather Pal</NavbarBrand>
           <NavbarToggler onClick={this.toggle} />
           <Collapse isOpen={this.state.isOpen} navbar>
             <Nav className="ml-auto" navbar>
               <NavItem>
                 <NavLink href="/components/">Home</NavLink>
               </NavItem>
               <NavItem>
                 <NavLink href="/components/contact/">Follow Us</NavLink>
               </NavItem>
             </Nav>
           </Collapse>
         </Navbar>

      </div>
    );
  };
};
