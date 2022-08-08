import React from 'react';
import "./TransationHistroy.css";
import HistoryIcon from '@mui/icons-material/History';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
const TransationHistroy = () => {
    return (
        <div className="transition-hist">
            <div className="transition-hist-1">
                <HistoryIcon  className='transition-hist-paidIcon'/>
                <div className="transition-hist-2">
                    <div>Show Transation Histroy

                    </div>
                    
                </div>
            </div>

            <div className="next"><ArrowForwardIosIcon fontSize='medium' /></div>
        </div>
    )
}

export default TransationHistroy;