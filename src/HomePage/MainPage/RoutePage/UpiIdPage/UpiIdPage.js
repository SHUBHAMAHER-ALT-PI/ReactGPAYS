import React from 'react';
import "./UpiIdPage.css";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import QrCodeScannerIcon from '@mui/icons-material/QrCodeScanner';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { Link } from 'react-router-dom';

const UpiIdPage = () => {
  return (
    <div className="UpiIdPage">
        <div className="UpiIdPage-top-dot-back">
    <Link to="/">
    <ArrowBackIcon/>
    </Link>
   
    <MoreVertIcon/>

  </div>
  <div className="UpiIdPage-body">
    <h3>Shubham Aher</h3>
    <div className="UpiIdPage-selection-box">
        <select>
        <option>Bank Name</option>
        </select>
    </div>
    <div className="UpiIdPage-Qr-img">
        <img src='https://media.istockphoto.com/vectors/code-illustration-vector-id828088276?k=20&m=828088276&s=612x612&w=0&h=JnX2DFXVGyTe-wDXdXhTG9p7yPmbd-jO3qWRfCQnHgE='/>

    </div>
    <div className="UpiIdPage-upi-Id">
        UPI ID: {}"ahers247@okicic"

    </div>
    <div className="UpiIdPage-para">
        Scan this code to Pay me
    </div>
    <div className="UpiIdPage-btn">
        <Link to="/Scan">
        <button className="UpiIdPage-btn-button"><div className="UpiIdPage-btn-icon"><QrCodeScannerIcon /> </div><div className="UpiIdPage-btn-name">Open Code Scanner</div></button>
        </Link>
        <button onClick={(e)=>{
          // e.ArrowBackIcon();
          // window.select("12123");
          navigator.clipboard.writeText("123456@");
          alert("UPI ID Is Copied");
        }} className="UpiIdPage-btn-button"><div className="UpiIdPage-btn-icon"><ContentCopyIcon/></div> <div className="UpiIdPage-btn-name">Copy UPI ID</div></button>
    </div>

  </div>
    </div>
  )
}

export default UpiIdPage;