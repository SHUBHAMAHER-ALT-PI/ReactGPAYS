import React from 'react';
import "./UPIID.css";
import PaidIcon from '@mui/icons-material/Paid';
import HistoryIcon from '@mui/icons-material/History';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const UPIID = () => {
    return (
        <div className="UPIID">
            <div className="UPIID-1">
                <PaidIcon  className='paidIcon'/>
                <div className="UPIID-2">
                    <div>UPI ID

                    </div>
                    <div className="Gmail">ahers247@gmail.com</div>
                </div>
            </div>

            <div className="next"><ArrowForwardIosIcon fontSize='medium' /></div>
        </div>
    )
}

export default UPIID