import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App';
import Carousel from "./components/caroursel"
import Example from "./components/example"
import { useState } from 'react';
import Camileo from './components/Camileo';
import Home from "./components/Home"


const root = ReactDOM.createRoot(document.getElementById('root'));
// const [y,setY]=useState(0);
document.getElementById('root').style.backgroundColor="grey";

root.render(
    // <Carousel  />
    // <Example />
    // <Camileo />
    <App />
);


