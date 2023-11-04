

import Container from "react-bootstrap/esm/Container";
import {Pizzas} from "../../componentes/Pizzas/Pizzas";
import Image from "react-bootstrap/esm/Image";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";





function Products(){
  return (


    <Container>
    <Row className="m-3">
     <Col md={4} className="mb-2">
    <div className="card">
     <Image src="./src/assets/imagenes/pizzas/1.jpg" fluid />
     <Pizzas name= "Garlic Fugazza"
            description= "Salsa garlic parmesan de base, extra cebolla fresca, queso mozzarella y un toque de orégano."
            valor= {12000}/>
   </div>
   </Col> 
   <Col md={4} className="mb-2">
   <div className="card">
     <Image src="./src/assets/imagenes/pizzas/2.jpg" fluid />
     <Pizzas name= "Garlic Fugazza"
            description= "Salsa garlic parmesan de base, extra cebolla fresca, queso mozzarella y un toque de orégano."
            valor= {12000}/>
   </div>
   </Col>
   <Col md={4} className="mb-2">
   <div className="card">
     <Image src="./src/assets/imagenes/pizzas/3.jpg" fluid />
     <Pizzas name= "Garlic Fugazza"
            description= "Salsa garlic parmesan de base, extra cebolla fresca, queso mozzarella y un toque de orégano."
            valor= {12000}/>
   </div>
   </Col>
   </Row>  
   <Row className="m-3">
     <Col md={4} className="mb-2">
     <div className="card">
     <Image src="./src/assets/imagenes/pizzas/4.jpg" fluid />
     <Pizzas name= "Garlic Fugazza"
            description= "Salsa garlic parmesan de base, extra cebolla fresca, queso mozzarella y un toque de orégano."
            valor= {12000}/>
   </div>
   </Col> 
   <Col md={4} className="mb-2">
   <div className="card">
     <Image src="./src/assets/imagenes/pizzas/5.jpg" fluid />
     <Pizzas name= "Garlic Fugazza"
            description= "Salsa garlic parmesan de base, extra cebolla fresca, queso mozzarella y un toque de orégano."
            valor= {12000}/>
   </div>
   </Col>
   <Col md={4} className="mb-2">
   <div className="card">
     <Image src="./src/assets/imagenes/pizzas/6.jpg" fluid />
     <Pizzas name= "Garlic Fugazza"
            description= "Salsa garlic parmesan de base, extra cebolla fresca, queso mozzarella y un toque de orégano."
            valor= {12000}/>
   </div>
   </Col>
   </Row>  
   <Row className="m-3">
     <Col md={4} className="mb-2">
     <div className="card">
     <Image src="./src/assets/imagenes/pizzas/7.jpg" fluid />
     <Pizzas name= "Garlic Fugazza"
            description= "Salsa garlic parmesan de base, extra cebolla fresca, queso mozzarella y un toque de orégano."
            valor= {12000}/>
   </div>
   </Col> 
   <Col md={4} className="mb-2">
   <div className="card">
     <Image src="./src/assets/imagenes/pizzas/8.jpg" fluid />
     <Pizzas name= "Garlic Fugazza"
            description= "Salsa garlic parmesan de base, extra cebolla fresca, queso mozzarella y un toque de orégano."
            valor= {12000}/>
   </div>
   </Col>
   <Col md={4} className="mb-2">
   <div className="card">
     <Image src="./src/assets/imagenes/pizzas/9.jpg" fluid />
     <Pizzas name= "Garlic Fugazza"
            description= "Salsa garlic parmesan de base, extra cebolla fresca, queso mozzarella y un toque de orégano."
            valor= {12000}/>
   </div>
   </Col>
   </Row>  
   </Container>
            
      
      
  
  )
}

export default Products;