import React from "react";
import { Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { NavDropdown } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { FormControl } from "react-bootstrap";
import Navbar from 'react-bootstrap/Navbar'

const Header = () => {
	return (
		<Navbar bg="light" expand="lg">
  			<Container fluid>
    			<Navbar.Brand href="#">Shopware</Navbar.Brand>
    			<Navbar.Toggle aria-controls="navbarScroll" />
			    <Navbar.Collapse id="navbarScroll">
			      <Nav
			        className="mx-auto my-2 my-lg-0"
			        style={{ maxHeight: '100px' }}
			        navbarScroll
			      >
			        <Nav.Link href="#action1">Home</Nav.Link>
			        <Nav.Link href="#action1">Product</Nav.Link>
			        <Nav.Link href="#action1">About</Nav.Link>
			        <Nav.Link href="#action2">Contact</Nav.Link>
			      </Nav>
			      <div>
			      	<Button variant="outline-success">Login</Button>
			      	<Button variant="outline-success ms-2">SignUp</Button>
			      	<Button variant="outline-success ms-2">Cart(0)</Button>
			      </div>
			    </Navbar.Collapse>
  			</Container>
		</Navbar>
	)
}

export default Header;