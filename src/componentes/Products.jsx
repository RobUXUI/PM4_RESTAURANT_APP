/* eslint-disable react/prop-types */


import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import './Products.css';


// Array de objetos que representa las pizzas
const pizzas = [
  {
            name: 'Garlic Fugazza',
            image: './src/assets/imagenes/pizzas/1.jpg',
            description: 'Salsa garlic parmesan de base, extra cebolla fresca, queso mozzarella y un toque de orégano.',
            valor: 12000,
          },
          {
            name: 'La Cordillerana',
            image: './src/assets/imagenes/pizzas/2.jpg',
            description: 'Delicioso chorizo, carne, pimentón, cebolla, oregano, oregano,cebolla.',
            valor: 9000,
          },
          {
            name: 'Vegan BBQ Shot',
            image: './src/assets/imagenes/pizzas/3.jpg',
            description: 'Delicioso NotChicken acompañado de aceitunas negras, cebolla, queso vegano y shot de bbq.',
            valor: 13000,
          },
          {
            name: 'Vegan Royal',
            image: './src/assets/imagenes/pizzas/4.jpg',
            description: 'Champiñon, pimiento verde, aceitunas negras, Not Meat (carne plant based) y queso vegano.',
            valor: 12000,
          },
          {
            name: 'Napolitana Cherry',
            image: './src/assets/imagenes/pizzas/5.jpg',
            description: 'Queso mozzarella, orégano y tomate cherry,Queso mozzarella, orégano tomate.',
            valor: 13000,
          },
          {
            name: 'Todas las Carnes',
            image: './src/assets/imagenes/pizzas/6.jpg',
            description: 'Queso mozzarella, pepperoni, jamón, tocino, salchicha italiana.',
            valor: 12000,
          },
          {
            name: 'Italiana',
            image: './src/assets/imagenes/pizzas/7.jpg',
            description: 'Queso mozzarella, orégano, pepperoni, salchicha italiana, aceitunas negras, champiñón.',
            valor: 14000,
          },
          {
            name: 'Super Pepperoni',
            image: './src/assets/imagenes/pizzas/8.jpg',
            description: 'Extra queso mozzarella, doble pepperoni,Extra queso mozzarella, doble pepperoni.',
            valor: 15000,
          },
          {
            name: 'Works',
            image: './src/assets/imagenes/pizzas/9.jpg',
            description: 'Queso mozzarella, pepperoni, jamón, salchicha italiana, cebolla, pimiento verde, aceitunas.',
            valor: 13000,
          },
    
];

// Componente PizzaCard que representa una tarjeta de pizza
function PizzaCard({ name, image, description, valor }) {
  return (
    <Col md={4} className="px-3">
      <div className='card'>
        <Image src={image} fluid />
        <h3>{name}</h3>
        <p>{description}</p>
        <Button variant="danger">Comprar ${valor.toFixed(2)}</Button>
      </div>
    </Col>
  );
}

// Función auxiliar para crear filas de pizzas
function createPizzaRows() {
  return pizzas.reduce((pizzaRows, pizza, index) => {
    if (index % 3 === 0) {
      pizzaRows.push([]);  // Crea una nueva fila cada 3 tarjetas
    }

    pizzaRows[pizzaRows.length - 1].push(pizza);  // Agrega la pizza a la fila actual
    return pizzaRows;
  }, []).map((row, rowIndex) => (
    <Row key={rowIndex} className="row-gap-3 mb-3">
      {row.map((pizza, pizzaIndex) => (
        <PizzaCard key={pizzaIndex} {...pizza} />
      ))}
    </Row>
  ));
}

// Componente ContainerExample (o CartaProductos) que muestra las tarjetas de pizza en un diseño de cuadrícula
function Products() {
  return (
    <section className="ContainerExample">
      <Container fluid="md">
        <Container>
          <h2 className="text-ligth">Carta de Pizzas</h2>
        </Container>
        {createPizzaRows()}
      </Container>
    </section>
  );
}

// Exportaciones
export default Products;
