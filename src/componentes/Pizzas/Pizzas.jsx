import PropTypes from 'prop-types';
import Button from 'react-bootstrap/esm/Button';

export const Pizzas = (props) => {
  return (
    <div>
      <h3>{props.name}</h3>
      <p>{props.description}</p>
      <Button variant="danger">Valor ${props.valor}</Button> 
    </div>
  );
};

Pizzas.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  valor: PropTypes.number.isRequired 
};

