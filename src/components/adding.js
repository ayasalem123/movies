import Form from 'react-bootstrap/Form';
import { v4 as uuidv4 } from 'uuid';
import InputGroup from 'react-bootstrap/InputGroup';
import Drop from './drop'
import Rating from '@mui/material/Rating';
import React, { useState , useEffect } from 'react';
import Button from 'react-bootstrap/Button';
function BasicExample({addMovieHandler}) {
  
    const [State, setState] = useState([true]);
    const [value, setValue] = useState(3);
    const [movieTest, setMovieTest] = useState({});
    const[emptyObject,setEmptyObject]=useState({id:uuidv4()})
    useEffect(()=>{
      setMovieTest(emptyObject)
    },[emptyObject])
   const handleChange=(event)=>{
    let newobj={...emptyObject,[event.target.name]:event.target.value}
    setEmptyObject(newobj)
    
   }
 

  //  console.log(emptyObject)

  return (
    <>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
        <Form.Control
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </InputGroup>

      <InputGroup className="mb-3">
      <InputGroup.Text id="basic-addon2"   >Name:</InputGroup.Text>
        <Form.Control
        name="name"
          placeholder="name of the movie"
          aria-label="movie's username"
          aria-describedby="basic-addon2"
          onChange={handleChange}
        />

      </InputGroup>

      <Form.Label htmlFor="basic-url">description</Form.Label>
      <InputGroup className="mb-3">
        <Form.Control  name="description" onChange={handleChange} id="basic-url" aria-describedby="basic-addon3" />
      </InputGroup>
      <InputGroup>
    <Drop></Drop>
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Text>image:</InputGroup.Text>
        <Form.Control name="img" onChange={handleChange} aria-label="Amount (to the nearest dollar)" />
        <InputGroup.Text>link</InputGroup.Text>
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Text>trailor:</InputGroup.Text>
        <Form.Control onChange={handleChange} name="src" aria-label="Amount (to the nearest dollar)" />
        <InputGroup.Text>link</InputGroup.Text>
      </InputGroup>


      <InputGroup>
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
          let newobj={...emptyObject,value:event.target.value}
          setEmptyObject(newobj)
        }}
      />
      </InputGroup>
      <Button variant="primary" size='sm' active onClick={()=>{
        addMovieHandler(movieTest)
        console.log(movieTest,'movie added')
        }}>
        Add movie
      </Button>{' '}
      <Button variant="secondary" size='sm' active>
        close
      </Button>
    </>
  );
}

export default BasicExample;