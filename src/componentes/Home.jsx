

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';


const Home = ()=> {
    return(

        <section>
        <Container>
        <Row className="row-gap-3 mb-3"> 

        <Col className="md p-5"> 
        <div>
        <h2>Best choice</h2>
        </div>
        <div>
         <p>El secreto del éxito se asemeja bastante a hacer una mejor pizza... cuanto más empeño pongas, mejor será el resultado. Hoy en día, buscamos la perfección como lo venimos haciendo desde el momento en que inauguramos nuestro primer restaurante hace más de 30 años. Hoy mantenemos el deseo de ser los mejores en preparar nuevos productos y nuevas e innovadoras recetas.

La calidad es esencial para nosotros. Ha sido nuestra base desde la primera pizza que preparamos en nuestro primer local en Jeffersonville, IN, hasta las que hacemos hoy en día en los más de 5,000 restaurantes en 44 países y territorios alrededor del mundo.

No usamos ingredientes baratos ni procesados. Desde nuestra salsa exclusiva, nuestros ingredientes, nuestra masa fresca original e incluso en la caja, invertimos para ofrecerte siempre la mejor pizza.

Sabemos que para tí, no es solo una mejor pizza. Es una reunión familiar, un cumpleaños inolvidable, una celebración de trabajo o simplemente una gran comida. Nuestro objetivo es garantizar que siempre tengas los mejores ingredientes para cada ocasión.</p>
         </div>
        </Col>

        <Col className="md p-5"> 
         <div>
         <Image src="./src/assets/imagenes/banners/img_section.jpg" fluid />
         </div>
        </Col>
        </Row>
        </Container>
        </section>
    )
}

export default Home;