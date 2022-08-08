import React from 'react';
import "./PayPhone.css";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';

const PayPhone = () => {
  return (
    <div className="main-payPhone">
    <div className="top-dot-back">
    <Link to="/">
      <ArrowBackIcon/>
    </Link>
      <MoreVertIcon/>

    </div>
    <div className="payPhone-body">
      <div>
        <h3>Enter a Phone number</h3>
        <p>Pay Someone using UPI verified phone number</p>
      </div>
      <div className="payPhone-input">
      <input value="+91" className="countrycode"/>
    <input type="text" className='input' placeholder='0000000000000'/>
    <AccountCircleIcon className='userAccount-logo' fontSize='large' />
      </div>
    </div>
    
    
    </div>
  )
}

export default PayPhone;