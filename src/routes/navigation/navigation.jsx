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
          <Navbar.Brand href="#home"> <Image src="./src/assets/imagenes/logo/logo.png"/></Navbar.Brand> 
          <Nav className="me-auto">
            <Nav.Link  as ={NavLink} to="/Home">Home</Nav.Link>
            <Nav.Link  as ={NavLink} to="/Products">Products</Nav.Link>
            <Nav.Link  as ={NavLink} to="/Contacto">Contacto</Nav.Link>
            </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigation;




// const Navigation = () => {
//   return (
//     <Nav defaultActiveKey="/home" as="ul">
//       <Nav.Item as="li">
//         <Nav.Link as={NavLink} to="/Home">HOME</Nav.Link>
//       </Nav.Item>
//       <Nav.Item as="li">
//         <Nav.Link as={NavLink} to="/Products">PRODUCTS</Nav.Link>
//       </Nav.Item>
//     </Nav>
//   );
// }

// export default Navigation;
