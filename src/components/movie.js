import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function Movie(props) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.data.img} />
      <Card.Body>
        <Card.Title>{props.data.name}</Card.Title>
        <Card.Text>
        {props.data.description}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Movie;