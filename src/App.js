import './App.css';
import {useState} from "react";
import Button from 'react-bootstrap/Button';
import Person from './Person';
import data from './data';

function App() {
  const [show, setShow] = useState(true);
  const handleToggle = () =>{
    setShow((prev) => !prev);
  }

  return (
    <div className="App">
      <Button style = {{width: '10rem', margin: '1rem'}} variant="success" onClick={handleToggle}>{show ? "Hide" : "Show"}</Button>
      { show ? <Person fullName ={data.fullName} bio ={data.bio} imgSrc ={data.imgSrc} profession = {data.profession}/> : null}
    </div>
  );
}

export default App;
