import { NavLink } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';

const Navigation = () => {
  return (
    <Nav defaultActiveKey="/home" as="ul">
      <Nav.Item as="li">
        <Nav.Link as={NavLink} to="/Home">HOME</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link as={NavLink} to="/Products">PRODUCTS</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default Navigation;
