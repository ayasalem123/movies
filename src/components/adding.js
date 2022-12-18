import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Drop from './drop'
import Rating from '@mui/material/Rating';
import data from '../data';
import React, { useState , useEffect } from 'react';
import Button from 'react-bootstrap/Button';
function BasicExample({addMovieHandler}) {
  
    const [State, setState] = useState([true]);
    const [value, setValue] = useState(3);
    const [movieTest, setMovieTest] = useState({});
    const[emptyObject,setEmptyObject]=useState({})
    useEffect(()=>{
      setMovieTest(emptyObject)
    },[emptyObject])
   const handleChange=(event)=>{
    let newobj={...emptyObject,name:event.target.value}
    setEmptyObject(newobj)
    
   }
   const handleChange3=(event)=>{
    let newobj={...emptyObject,img:event.target.value}
    setEmptyObject(newobj)
    
   }
   const handleChange1=(event)=>{
    let newobj={...emptyObject,description:event.target.value}
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
      <InputGroup.Text id="basic-addon2" >Name:</InputGroup.Text>
        <Form.Control
          placeholder="name of the movie"
          aria-label="movie's username"
          aria-describedby="basic-addon2"
          onChange={handleChange}
        />

      </InputGroup>

      <Form.Label htmlFor="basic-url">description</Form.Label>
      <InputGroup className="mb-3">
        <Form.Control onChange={handleChange1} id="basic-url" aria-describedby="basic-addon3" />
      </InputGroup>
      <InputGroup>
    <Drop></Drop>
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Text>image:</InputGroup.Text>
        <Form.Control onChange={handleChange3} aria-label="Amount (to the nearest dollar)" />
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