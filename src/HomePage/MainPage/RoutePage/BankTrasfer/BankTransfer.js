import React from 'react';
import "./BankTransfer.css";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const BankTransfer = () => {
  return (
    <div className="BankTransfer">
        <div className="bank-top-dot-back">
        <Link to="/ReactGPAYS">
      <ArrowBackIcon/>
    </Link>
      <p>Enter recipient details</p>
      <MoreVertIcon/>

    </div>
    <div className="bankTranfer-from">
        <form about='#'>
        <input type="number" className='input' placeholder='Account Number'/>
        <input type="number" className='input' placeholder='Re-enter Account Number'/>
        <input type="text" className='input' placeholder='IFSC'/>
        <input type="text" className='input' placeholder='Recipient Name'/>
        <Button type='submit'>Confirm</Button>
        <p>This information will be securely saved as per Google pay term of service and privacy policy</p>

        </form>

    </div>
    </div>
  )
}

export default BankTransfer;