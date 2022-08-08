import React, { useEffect, useState } from 'react';
import "./LandingPage.css";

const LandingPage = () => {
    const [op, setop]=useState(1)
    useEffect(()=>{
        const a= setTimeout(()=>{
           if(op==1){
            setop(-1);
           }else{
            setop(1);
           }

        }, 1000);
        // clearTimeout(a);
        
    },[op])
  return (
    <div className='landingPage'>
        <img src="https://i.pinimg.com/originals/f6/60/a6/f660a637c5ea8ef2b00218bac3479c82.png" alt="Logo" style={{opacity:op}}/>
    </div>
  )
}

export default LandingPage;