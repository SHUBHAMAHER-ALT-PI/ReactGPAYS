import React from 'react';
import "./PayWithUpi.css";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Link } from 'react-router-dom';
// import { Button } from '@mui/material';
const PayWithUpi = () => {
  return (
    <div className="main-paywithupi"><div className="paywith-top-dot-back">
    <Link to="/">
    <ArrowBackIcon/>
    </Link>
    <MoreVertIcon/>

  </div>
  <div className="main-paywithupi-body">
    <h3>Pay to UPI ID</h3>
    <input type="number" className='input' placeholder='Enter UPI ID'/>
  </div>
  <div className='btn-and-logo-paywith'>
  <button className='btn-and-logo-paywith-btn' type='submit'>Continue</button>
  <p>Powerd By ...</p>

  </div>
  </div>
  )
}

export default PayWithUpi;