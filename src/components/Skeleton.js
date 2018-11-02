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
        <div id="Home"></div> {/* Home anchor link - This is here on purpose - and I like it. */} 
         <Navbar color="dark" dark fixed="top" expand="md">
           <NavbarBrand href="/">AWP - Awesome Weather Pal</NavbarBrand>
           <NavbarToggler onClick={this.toggle} />
           <Collapse isOpen={this.state.isOpen} navbar>
             <Nav className="ml-auto" navbar>
               <NavItem className="navitem">
                 <NavLink href="/#Home">Home</NavLink>
               </NavItem>
               <NavItem className="navitem">
                 <NavLink href="/#Follow" >Follow Us</NavLink>
               </NavItem>
             </Nav>
           </Collapse>
         </Navbar>

      </div>
    );
  };
};
