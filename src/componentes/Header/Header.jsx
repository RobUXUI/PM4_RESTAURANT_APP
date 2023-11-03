

import Carousel from 'react-bootstrap/Carousel';





const Header = () => {
  return (
    
    <Carousel data-bs-theme="ligth">
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="./src/assets/imagenes/banners/banner.png"
        alt="First slide"
      />
      <Carousel.Caption>
        <h3>Aprovecha nuestros descuentos</h3>
        <p>solo por tiempo limitado.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="./src/assets/imagenes/banners/banner2.png"
        alt="Second slide"
      />
      <Carousel.Caption>
        <h5>Second slide label</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="./src/assets/imagenes/banners/banner.png"
        alt="Third slide"
      />
      <Carousel.Caption>
        <h5>Third slide label</h5>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>

  )
}

export default Header;