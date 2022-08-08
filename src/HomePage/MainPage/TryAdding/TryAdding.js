import React from 'react';
import "./TryAdding.css";
import TvIcon from '@mui/icons-material/Tv';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
const TryAdding = () => {
    return (
        <div className="TryAdding">
            <div className="icon-try">
                <TvIcon />
                <p>DTH/ Cable TV</p>
            </div>
            <div className="icon-try">
                <EmojiObjectsIcon />
                <p>Electricity</p>
            </div>
            <div className="icon-try">
                <PhoneIphoneIcon />
                <p>PostPaid Mobile</p>
            </div>
            
        </div>
    )
}

export default TryAdding;