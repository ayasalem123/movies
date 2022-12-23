import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {useNavigate} from "react-router-dom"

function Movie(props) {
  const navigate = useNavigate();
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.data.img} />
      <Card.Body>
        <Card.Title>{props.data.name}</Card.Title>
        <Card.Text>
        {props.data.description}
        </Card.Text>
      </Card.Body>
      <button onClick={()=>navigate(`/hi/${props.data.id}`)}>see</button>
    </Card>
    
  );
}

export default Movie;