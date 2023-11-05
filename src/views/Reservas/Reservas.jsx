import { useState } from 'react';
import { Button, Col, Form, Row, Container } from 'react-bootstrap';
import '../Reservas/Reservas.css';



function Reservas() {
  // Initialize state for each form field
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [ciudad, setCiudad] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [comensales, setComensales] = useState('');
  const [terminos, setTerminos] = useState(false);
  
  // State to manage form validation
  const [validated, setValidated] = useState(false);
  
  // State to check if the reservation was successful
  const [reservaRealizada, setReservaRealizada] = useState(false);

  // Form submission handler
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    event.stopPropagation();
    if (form.checkValidity()) {
     
      console.log('Form data', { nombre,email, telefono, ciudad, mensaje, comensales });
 
      setReservaRealizada(true);
    }
    setValidated(true);
  };

  if (reservaRealizada) {
    return (
      <Container className="my-3 px-3">
        <div>
        <h2>Reserva realizada</h2>
        <p>¡Tu reserva ha sido confirmada con éxito!</p>
        </div>       
      </Container>
    );
  }

  // Form rendering
  return (

     <Container className="my-3 px-3">
     <Row className="m-5"> 
     <Col md={6} className="datos_contacto mb-2">
     <h2>Reserva con nosotros  </h2>
     <h6>A partir de tu contacto, nos comunicaremos contigo <br /> para revisar fechas y disponibilidad de horarios. </h6>
    <br />
        <Container  fluid>
        <h6> telefono: +1 (555) 123-4567</h6>
        <h6> contacto@bestchoice.com</h6>
        </Container>
     </Col>
     <Col md={6} className="formulario_reserva mb-2">
      <h2>Formulario de Reservas</h2>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3">
          {/* Nombre input */}
          <Form.Group as={Col} controlId="validationCustom01">
            <Form.Label>Nombre Completo</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          
        
        </Row>
        <Row className="mb-3">

        {/* Email input */}
        <Form.Group as={Col} md="4" controlId="validationCustom03">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form.Control.Feedback type="invalid">
            Please provide a valid email.
          </Form.Control.Feedback>
        </Form.Group>

        {/* Teléfono input */}
        <Form.Group as={Col} md="4" controlId="validationCustom04">
          <Form.Label>Teléfono</Form.Label>
          <Form.Control
            type="tel"
            placeholder="Teléfono"
            required
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
          />
          <Form.Control.Feedback type="invalid">
            Proporcionar un número correcto
          </Form.Control.Feedback>
        </Form.Group>

         {/* Ciudad input */}
         <Form.Group as={Col} md="4" controlId="validationCustom05">
          <Form.Label>Ciudad</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ciudad"
            required
            value={ciudad}
            onChange={(e) => setCiudad(e.target.value)}
          />
          <Form.Control.Feedback type="invalid">
            Please provide a valid city.
          </Form.Control.Feedback>
        </Form.Group>
        </Row>
      
        <Row className="mb-3">
        {/* Mensaje textarea */}
        <Form.Group as={Col} controlId="validationCustom06">
          <Form.Label>Mensaje</Form.Label>
          <Form.Control
            as="textarea"
            placeholder="Mensaje"
            required
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
          />
          <Form.Control.Feedback type="invalid">
            Please provide a message.
          </Form.Control.Feedback>
        </Form.Group>
        </Row>
        <Row className="mb-3">
        {/* Cantidad de Comensales select */}
        <Form.Group as={Col} controlId="validationCustomComensales">
          <Form.Label>Cantidad de Comensales</Form.Label>
          <Form.Control
            as="select"
            required
            value={comensales}
            onChange={(e) => setComensales(e.target.value)}
          >
            <option value="">Seleccione...</option>
            {[...Array(10)].map((_, index) => (
              <option key={index} value={index + 1}>
                {index + 1}
              </option>
            ))}
          </Form.Control>
          <Form.Control.Feedback type="invalid">
            Please select the number of diners.
          </Form.Control.Feedback>
        </Form.Group>
        </Row>
        {/* Términos y condiciones checkbox */}
        <Form.Group className="mb-3">
          <Form.Check
            required
            label="Acepto los términos y condiciones impartidos por el local"
            feedback="Debe aceptar los términos y condiciones antes de enviar."
            feedbackType="invalid"
            checked={terminos}
            onChange={(e) => setTerminos(e.target.checked)}
          />
        </Form.Group>

        {/* Submit button */}
        <Button variant="danger" type="submit">Enviar</Button>
      </Form>
      </Col>
      </Row>
    </Container>
  );
}

export default Reservas;
