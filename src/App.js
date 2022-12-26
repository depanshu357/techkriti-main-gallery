import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import { useState } from 'react';
import Camileo from './components/Camileo';
import CarouselFadeExample from './components/caroursel';

function App() {
  const [hover,setHover] = useState(false)
  return (
    <div >
      {/* <Camileo /> */}
      <CarouselFadeExample />
      {/* <Home /> */}
    </div>
  );
}

export default App;
