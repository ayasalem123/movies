import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Movie from './components/movie';
import data from './data';
import Rating from '@mui/material/Rating';
import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import BasicExample from './components/adding';
function App() {
  let arr=[true];
  const popover = (
    <Popover id="popover-basic">
      <Popover.Header as="h3">Adding a movie</Popover.Header>
      <Popover.Body>
        <BasicExample></BasicExample>
      </Popover.Body>
    </Popover>
  );
  
  const Example = () => (
    <OverlayTrigger trigger="click" placement="right" overlay={popover} >
      <Button variant="success">Add a movie</Button>
    </OverlayTrigger>
  );

  const [value, setValue] = useState(null);
  const add=()=>{return<div>
    hi
  </div> }
  const [Aya, setAya] = useState(data);
 useEffect(() => {
  setAya(Aya)
  console.log("hihi")
},arr);
console.log("aya"+{...Aya})
  return (
    <div >
     
      {Example()}
      <div className="App">
      {Aya.map((el)=>{
      return <div><Movie data={el}></Movie>
      <Rating
        name="simple-controlled"
        value={el.value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
      
      </div>})}
      </div>
      <div><button onClick={()=>{arr=[arr[0]?arr[0]:!arr[0]]}}>heer</button></div>
    </div>
  );
}

export default App;
