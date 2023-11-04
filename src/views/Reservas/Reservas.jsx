import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

function Reservas() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Container className="my-3 px-3">
      <Container className="c_title">
        <h2>Formulario de Reservas</h2>
        <br />
      </Container>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Nombre"
              defaultValue="" // Changed from "First name" and "Nombre"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom02">
            <Form.Label>Apellido</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Apellido"
              defaultValue="" // Changed from "Last name" and "Apellido"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustomUsername">
            <Form.Label>Email</Form.Label> {/* Changed from "Username" */}
            <InputGroup hasValidation>
              <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
              <Form.Control
                type="email" // Changed to type email
                placeholder="Email"
                aria-describedby="inputGroupPrepend"
                required
              />
              <Form.Control.Feedback type="invalid">
                Por favor escriba su email
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="validationCustom03">
            <Form.Label>Mensaje</Form.Label>
            <Form.Control type="text" placeholder="Mensaje" required />
            <Form.Control.Feedback type="invalid">
              Escriba su mensaje
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom04">
            <Form.Label>Ciudad</Form.Label>
            <Form.Control type="text" placeholder="Ciudad" required />
            <Form.Control.Feedback type="invalid">
              Ingrese la ciudad
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom05">
            <Form.Label>Teléfono</Form.Label>
            <Form.Control type="text" placeholder="Teléfono" required />
            <Form.Control.Feedback type="invalid">
              Por favor ingrese su número de teléfono
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Form.Group className="mb-3">
          <Form.Check
            required
            label="Aceptar términos y condiciones"
            feedback="Debe aceptar antes de enviar." // Translated for consistency
            feedbackType="invalid"
          />
        </Form.Group>
        <Button variant="danger" type="submit">Enviar</Button>
      </Form>
    </Container>
  );
}

export default Reservas;
