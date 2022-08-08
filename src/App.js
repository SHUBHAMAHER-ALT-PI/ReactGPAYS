import logo from './logo.svg';
import './App.css';
import LandingPage from './LandingPage/LandingPage';
import { useEffect, useState } from 'react';
import HomePage from './HomePage/HomePage';
import {BrowserRouter}  from "react-router-dom";
import MainRouts from './HomePage/MainPage/RoutePage/MainRouts/MainRouts';

function App() {
  const [active , setActive] = useState();
  useEffect(()=>{
    setTimeout(()=>{
      setActive(true)
    }, 4000);
  },[])
  return (
  <BrowserRouter>
   <div  className="main-contain">
   {
    active ? <MainRouts/> : <LandingPage/>
   }
   </div>
  </BrowserRouter>
  );
}

export default App;
