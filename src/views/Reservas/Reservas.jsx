// import { useState } from 'react';
// import { Button, Col, Form, Row, Container } from 'react-bootstrap';
// import '../Reservas/Reservas.css';
// import ListaReservas from '../../componentes/ListaReservas';



// function Reservas() {
//   // Initialize state for each form field
//   const [nombre, setNombre] = useState('');
//   const [email, setEmail] = useState('');
//   const [telefono, setTelefono] = useState('');
//   const [ciudad, setCiudad] = useState('');
//   const [mensaje, setMensaje] = useState('');
//   const [comensales, setComensales] = useState('');
//   const [terminos, setTerminos] = useState(false);
  
//   // State to manage form validation
//   const [validated, setValidated] = useState(false);
  
//   // State to check if the reservation was successful
//   const [reservaRealizada, setReservaRealizada] = useState(false);

//   // Form submission handler
//   const handleSubmit = (event) => {
//     const form = event.currentTarget;
//     event.preventDefault();
//     event.stopPropagation();
//     if (form.checkValidity()) {
     
//       console.log('Form data', { nombre,email, telefono, ciudad, mensaje, comensales });
 
//       setReservaRealizada(true);
//     }
//     setValidated(true);
//   };

//   if (reservaRealizada) {
//     return (
//       <Container className="my-3 px-3">
//         <div>
//         <h2>Reserva realizada</h2>
//         <p>¡Tu reserva ha sido confirmada con éxito!</p>
//         </div>       
//       </Container>
//     );
//   }

//   // Form rendering
//   return (

//      <Container className="my-3 px-3">
//      <Row className="m-5"> 
//      <Col md={6} className="datos_contacto mb-2">
//      <h2>Reserva con nosotros  </h2>
//      <h6>A partir de tu contacto, nos comunicaremos contigo <br /> para revisar fechas y disponibilidad de horarios. </h6>
//     <br />
//         <Container  fluid>
//         <h6> telefono: +1 (555) 123-4567</h6>
//         <h6> contacto@bestchoice.com</h6>
//         </Container>
//      </Col>
//      <Col md={6} className="formulario_reserva mb-2">
//       <h2>Formulario de Reservas</h2>
//       <Form noValidate validated={validated} onSubmit={handleSubmit}>
//         <Row className="mb-3">
//           {/* Nombre input */}
//           <Form.Group as={Col} controlId="validationCustom01">
//             <Form.Label>Nombre Completo</Form.Label>
//             <Form.Control
//               required
//               type="text"
//               placeholder="Nombre"
//               value={nombre}
//               onChange={(e) => setNombre(e.target.value)}
//             />
//             <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
//           </Form.Group>
          
        
//         </Row>
//         <Row className="mb-3">

//         {/* Email input */}
//         <Form.Group as={Col} md="4" controlId="validationCustom03">
//           <Form.Label>Email</Form.Label>
//           <Form.Control
//             type="email"
//             placeholder="Email"
//             required
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <Form.Control.Feedback type="invalid">
//             Please provide a valid email.
//           </Form.Control.Feedback>
//         </Form.Group>

//         {/* Teléfono input */}
//         <Form.Group as={Col} md="4" controlId="validationCustom04">
//           <Form.Label>Teléfono</Form.Label>
//           <Form.Control
//             type="tel"
//             placeholder="Teléfono"
//             required
//             value={telefono}
//             onChange={(e) => setTelefono(e.target.value)}
//           />
//           <Form.Control.Feedback type="invalid">
//             Proporcionar un número correcto
//           </Form.Control.Feedback>
//         </Form.Group>

//          {/* Ciudad input */}
//          <Form.Group as={Col} md="4" controlId="validationCustom05">
//           <Form.Label>Ciudad</Form.Label>
//           <Form.Control
//             type="text"
//             placeholder="Ciudad"
//             required
//             value={ciudad}
//             onChange={(e) => setCiudad(e.target.value)}
//           />
//           <Form.Control.Feedback type="invalid">
//             Please provide a valid city.
//           </Form.Control.Feedback>
//         </Form.Group>
//         </Row>
      
//         <Row className="mb-3">
//         {/* Mensaje textarea */}
//         <Form.Group as={Col} controlId="validationCustom06">
//           <Form.Label>Mensaje</Form.Label>
//           <Form.Control
//             as="textarea"
//             placeholder="Mensaje"
//             required
//             value={mensaje}
//             onChange={(e) => setMensaje(e.target.value)}
//           />
//           <Form.Control.Feedback type="invalid">
//             Please provide a message.
//           </Form.Control.Feedback>
//         </Form.Group>
//         </Row>
//         <Row className="mb-3">
//         {/* Cantidad de Comensales select */}
//         <Form.Group as={Col} controlId="validationCustomComensales">
//           <Form.Label>Cantidad de Comensales</Form.Label>
//           <Form.Control
//             as="select"
//             required
//             value={comensales}
//             onChange={(e) => setComensales(e.target.value)}
//           >
//             <option value="">Seleccione...</option>
//             {[...Array(10)].map((_, index) => (
//               <option key={index} value={index + 1}>
//                 {index + 1}
//               </option>
//             ))}
//           </Form.Control>
//           <Form.Control.Feedback type="invalid">
//             Please select the number of diners.
//           </Form.Control.Feedback>
//         </Form.Group>
//         </Row>
//         {/* Términos y condiciones checkbox */}
//         <Form.Group className="mb-3">
//           <Form.Check
//             required
//             label="Acepto los términos y condiciones impartidos por el local"
//             feedback="Debe aceptar los términos y condiciones antes de enviar."
//             feedbackType="invalid"
//             checked={terminos}
//             onChange={(e) => setTerminos(e.target.checked)}
//           />
//         </Form.Group>

//         {/* Submit button */}
//         <Button variant="danger" type="submit">Enviar</Button>
//       </Form>
//       </Col>
//       </Row>

//       <Row>
//       <ListaReservas/>
//       </Row>
//     </Container>
//   );
// }

// export default Reservas;


import { useState } from 'react';
import { Button, Col, Form, Row, Container } from 'react-bootstrap';
import '../Reservas/Reservas.css';
import ListaReservas from '../../componentes/ListaReservas';

function Reservas() {
  // Inicializar estado para cada campo del formulario
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [ciudad, setCiudad] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [comensales, setComensales] = useState('');
  const [terminos, setTerminos] = useState(false);
  
  // Estado para gestionar la validación del formulario
  const [validated, setValidated] = useState(false);
  
  // Estado para comprobar si la reserva se realizó con éxito
  const [reservaRealizada, setReservaRealizada] = useState(false);

  // Manejador para el envío del formulario
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    event.stopPropagation();
    if (form.checkValidity()) {
      // Registra los datos del formulario en la consola
      console.log('Datos del formulario', { nombre, email, telefono, ciudad, mensaje, comensales });
      // Marca la reserva como realizada
      setReservaRealizada(true);
    }
    // Activa la validación del formulario
    setValidated(true);
  };

  // Si se realizó la reserva, mostrar mensaje de confirmación
  if (reservaRealizada) {
    return (
      <Container className="my-3 px-3">
        <div>
          <h2>Reserva Realizada</h2>
          <p>¡Tu reserva ha sido confirmada con éxito!</p>
        </div>       
      </Container>
    );
  }

  // Renderizar formulario
  return (
    <Container className="my-3 px-3">
      <Row className="m-5">
        <Col md={6} className="datos_contacto mb-2">
          <h2>Reserva con nosotros</h2>
          <h6>Tras tu contacto, nos pondremos en comunicación contigo para confirmar fechas y disponibilidad de horarios.</h6>
          <br />
          <Container fluid>
            <h6>Teléfono: +1 (555) 123-4567</h6>
            <h6>contacto@bestchoice.com</h6>
          </Container>
        </Col>
        <Col md={6} className="formulario_reserva mb-2">
          <h2>Formulario de Reservas</h2>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row className="mb-3">
              {/* Entrada para el nombre */}
              <Form.Group as={Col} controlId="validationCustom01">
                <Form.Label>Nombre Completo</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Nombre"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                />
                <Form.Control.Feedback>¡Todo correcto!</Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              {/* Entrada para el correo electrónico */}
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
                  Por favor, introduce un email válido.
                </Form.Control.Feedback>
              </Form.Group>

              {/* Entrada para el teléfono */}
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
                  Por favor, introduce un número de teléfono válido.
                </Form.Control.Feedback>
              </Form.Group>

              {/* Entrada para la ciudad */}
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
                  Por favor, introduce una ciudad válida.
                </Form.Control.Feedback>
              </Form.Group>
            </Row>

            <Row className="mb-3">
              {/* Selector de número de comensales */}
              <Form.Group as={Col} controlId="validationCustom02">
                <Form.Label>Número de Comensales</Form.Label>
                <Form.Control
                  required
                  type="number"
                  placeholder="Comensales"
                  value={comensales}
                  onChange={(e) => setComensales(e.target.value)}
                />
                <Form.Control.Feedback>¡Perfecto!</Form.Control.Feedback>
              </Form.Group>
            </Row>

            <Row className="mb-3">
              {/* Área de texto para el mensaje */}
              <Form.Group as={Col} controlId="validationCustom03">
                <Form.Label>Mensaje</Form.Label>
                <Form.Control
                  as="textarea"
                  placeholder="Deja aquí tu mensaje"
                  required
                  value={mensaje}
                  onChange={(e) => setMensaje(e.target.value)}
                />
                <Form.Control.Feedback type="invalid">
                  Por favor, introduce un mensaje.
                </Form.Control.Feedback>
              </Form.Group>
            </Row>

            <Form.Group className="mb-3">
              <Form.Check
                required
                label="Acepto los términos y condiciones"
                feedback="Debes aceptar los términos y condiciones antes de enviar."
                feedbackType="invalid"
                checked={terminos}
                onChange={(e) => setTerminos(e.target.checked)}
              />
            </Form.Group>
            <Button variant='danger' type="submit">Enviar</Button>
          </Form>
        </Col>
      </Row>
      <Row>
   <ListaReservas/>
       </Row>
    </Container>
  );
}

export default Reservas;
