import { NavLink } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from "react-bootstrap/esm/Image";

function Navigation() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/Home"> <Image src="./src/assets/imagenes/logo/logo.png"/></Navbar.Brand> 
          <Nav className="me-auto">
            <Nav.Link  as ={NavLink} to="/Home">HOME</Nav.Link>
            <Nav.Link  as ={NavLink} to="/Products">PRODUCTS</Nav.Link>
            <Nav.Link  as ={NavLink} to="/Reservas">RESERVAS</Nav.Link>
            </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigation;




