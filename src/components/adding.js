import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Drop from './drop'
import Rating from '@mui/material/Rating';
import data from '../data';
import React, { useState , useEffect } from 'react';
import Button from 'react-bootstrap/Button';
function BasicExample() {
    const [State, setState] = useState([true]);
    const [value, setValue] = useState(3);
    const [Aya, setAya] = useState({data});
    console.log(...data,{
            img:"https://cn.i.cdn.ti-platform.com/content/20/the-amazing-world-of-gumball/showpage/za/gumball-carousel.a94b8e60.png",
            name:"gumball",
            description:"talks about gumball",
            value:"1000000000000000000000000",
          })
    console.log({data})
    useEffect(()=>{
    setAya(prevState=>prevState , {
        img:"https://cn.i.cdn.ti-platform.com/content/20/the-amazing-world-of-gumball/showpage/za/gumball-carousel.a94b8e60.png",
        name:"gumball",
        description:"talks about gumball",
        value:"4",
      })
    
       },State)

    
    // const [data, setdata] = useState({data});
    
    // const addingMovie=()=>{
    //     console.log("hi")
    //     setdata([...data,{
    //         img:"https://cn.i.cdn.ti-platform.com/content/20/the-amazing-world-of-gumball/showpage/za/gumball-carousel.a94b8e60.png",
    //         name:"gumball",
    //         description:"talks about gumball",
    //         value:"4",
    //       },])
    // }
  
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
      <InputGroup.Text id="basic-addon2">Name:</InputGroup.Text>
        <Form.Control
          placeholder="name of the movie"
          aria-label="movie's username"
          aria-describedby="basic-addon2"
        />

      </InputGroup>

      <Form.Label htmlFor="basic-url">description</Form.Label>
      <InputGroup className="mb-3">
        <Form.Control id="basic-url" aria-describedby="basic-addon3" />
      </InputGroup>
      <InputGroup>
    <Drop></Drop>
      </InputGroup>
      <InputGroup className="mb-3">
        <InputGroup.Text>time:</InputGroup.Text>
        <Form.Control aria-label="Amount (to the nearest dollar)" />
        <InputGroup.Text>hours</InputGroup.Text>
      </InputGroup>

      <InputGroup>
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
      </InputGroup>
      <Button variant="primary" size='sm' active onClick={()=>{setState(!State)}}>
        Add movie
      </Button>{' '}
      <Button variant="secondary" size='sm' active>
        close
      </Button>
      <div>Aya</div>
    </>
  );
}

export default BasicExample;