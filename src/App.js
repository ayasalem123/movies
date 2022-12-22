import logo from './logo.svg';
import {Link} from "react-router-dom"
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Movie from './components/movie';
import data from './data';
import ValueRate from './components/valueRating'
import Rating from '@mui/material/Rating';
import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import BasicExample from './components/adding';
import Search from './components/input'
import Hi from './components/hi'
import {Route,Routes} from "react-router-dom"
function App() {
  let arr=[true];
  const [value, setValue] = useState("");
  const [valueRating, setValueRating] = useState("");
  const [movies, setMovies] = useState([]);
  const [filteredArr, setFilteredArr] = useState(movies);
  useEffect(() => {
    setFilteredArr(movies)
  },[movies.length])
  useEffect(() => {
    let NewfilteredArr = movies.filter(el => el.name.startsWith(value));
    setFilteredArr(NewfilteredArr)
  },[value])


  useEffect(() => {
    let NewfilteredArr = movies.filter(el => el.value>=valueRating);
    setFilteredArr(NewfilteredArr)
  },[valueRating])


  // console.log(filteredArr)
  const addMovie = (movie) => {
    let newMovies = [...movies,movie]
    setMovies(newMovies)
  }
  // console.log(movies)
  useEffect(() => {
    setMovies(data)
  },[])
  const popover = (
    <Popover id="popover-basic">
      <Popover.Header as="h3">Adding a movie</Popover.Header>
      <Popover.Body>
        <BasicExample addMovieHandler={addMovie}></BasicExample>
      </Popover.Body>
    </Popover>
  );
  
  const Example = () => (
    <OverlayTrigger trigger="click" placement="right" overlay={popover} >
      <Button variant="success">non movie</Button>
    </OverlayTrigger>
  );
  return (
    <div className="all">
      <Routes>
      <Route path="/hi/:id" element={<Hi></Hi>}></Route>
      <Route path="/" element={
      <div>
        <Search setVal={setValue}></Search>
      <ValueRate setValueRating={setValueRating} />
      {/* { console.log(value)} */}
      {Example()}
      <div className="App">
      {filteredArr.map((el,i)=>{
        let s="/hi/"+i
        console.log(s)
      return <div id="movie"><Movie data={el}></Movie>
      <Rating
        name="simple-controlled"
        value={el.value}
        
      />
      {console.log(i)}
    
      <Link to={s} ><button >select</button></Link>
      </div>})}
      </div> 
      </div>}></Route>
    </Routes>
       
    </div>
  );
}

export default App;