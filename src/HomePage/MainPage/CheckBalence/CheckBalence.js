import React from 'react';
import "./CheckBalence.css";
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const CheckBalence = () => {
  return (
    <div className="CheckBalence">
    <div className="CheckBalence-1">
        <AccountBalanceIcon  className='CheckBalence-paidIcon'/>
        <div className="CheckBalence-2">
            <div>Check Bank Balance

            </div>
            
        </div>
    </div>

    <div className="next"><ArrowForwardIosIcon fontSize='medium' /></div>
</div>
  )
}

export default CheckBalence