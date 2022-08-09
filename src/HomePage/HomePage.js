import React from 'react';
import "./HomePage.css";
import SearchBar from './TopBar/SearchBox/SearchBar'
import User from './TopBar/User/User';
import QrCodeScannerIcon from '@mui/icons-material/QrCodeScanner';
import PermContactCalendarRoundedIcon from '@mui/icons-material/PermContactCalendarRounded';
import SendToMobileRoundedIcon from '@mui/icons-material/SendToMobileRounded';
import PaidRoundedIcon from '@mui/icons-material/PaidRounded';
import SensorOccupiedRoundedIcon from '@mui/icons-material/SensorOccupiedRounded';
import CameraFrontRoundedIcon from '@mui/icons-material/CameraFrontRounded';
import ReceiptLongRoundedIcon from '@mui/icons-material/ReceiptLongRounded';
import ChargingStationRoundedIcon from '@mui/icons-material/ChargingStationRounded';
import CameraFrontRounded from '@mui/icons-material/CameraFrontRounded';
import People from './MainPage/People/People';
import LocalMallRoundedIcon from '@mui/icons-material/LocalMallRounded';
import Bussiness from './MainPage/Business/Bussiness';
import Bill from './MainPage/Bills/Bill';
import TryAdding from './MainPage/TryAdding/TryAdding';
import Promotion from './MainPage/Promotions/Promotion';
import UPIID from './MainPage/UPIID/UPIID';
import TransationHistroy from './MainPage/TransationHistroy/TransationHistroy';
import CheckBalence from './MainPage/CheckBalence/CheckBalence';
import Scan from './MainPage/RoutePage/ScanQr/Scan';
import { BrowserRouter, Routes, Route,Link } from "react-router-dom";
import MainRouts from './MainPage/RoutePage/MainRouts/MainRouts';

const HomePage = () => {
  return (
    <div>
     
     
      <div className="SearchBar_Logo">
        <SearchBar />
        <User />
      </div>
      {/* All Innner Component is Here   */}
      <div className="main-container">
        <div className='icon-main'>

          <div>
            <Link to="./scan" >
            <QrCodeScannerIcon />
            </Link>
            <p className="icon-name">
              Scan any QR Pay
            </p>
          </div>

          <div>
            <Link to="./PayContact">
            <PermContactCalendarRoundedIcon />
            </Link>
            <p className="icon-name">
              Pay Contact
            </p>
          </div>
          <div>
            <Link to="./PayPhone">
            <SendToMobileRoundedIcon />
            </Link>
            <p className="icon-name">
              Pay Phone Number

              
            </p>

          </div>

          <div>
            <Link to="./PayinBank">

            <PaidRoundedIcon />
            </Link>
            <p className="icon-name">
              Bank Transfer
            </p>
          </div>
          <div>
            <Link to="./PayWithUpi">

            <SensorOccupiedRoundedIcon />
            </Link>

            <p className="icon-name">
              Pay to UPI ID
            </p>
          </div>
          <div>
            <Link to="./SelfTransfer">

            <CameraFrontRoundedIcon />
            </Link>
            <p className="icon-name">
              Self Transfer
            </p>
          </div>

          <div>
            <Link to="./paybills">

            <ReceiptLongRoundedIcon />
            </Link>
            <p className="icon-name">
              Pay bills
            </p>
          </div>
          <div>
            <Link to="./MobileRecharge">

            <ChargingStationRoundedIcon />
            </Link>

            <p className="icon-name">
              Mobile Recharge
            </p>
          </div>


        </div>
        <div>
          <p className="people"> People</p>
          <div className="peopleRow">
            <People />
          </div>
        </div>
        <div>
          <div className="business-main"> <p>Bussiness</p> <p className="bussiness-button"><LocalMallRoundedIcon fontSize='small' /> Explore </p></div>
          <div className="businessRow">
            <Bussiness />
          </div>
        </div>
        <div>
          <p>Bills Recharge and More</p>
          <div className="billRow">
            <Bill />
          </div>
          <p>Also Try adding </p>
            <div className='tryadding-main'>
              <TryAdding/>
            </div>
            <div className="more-btn-main">
           <Link to='/paybills'>
           <button className='more-btn'>See All</button>
           </Link>
            </div>
        </div>
        <div className='promotion'>
          <p> Promotion</p>
          <div className='promotionRow'>
            <Promotion />

          </div>

        </div>
        <div className="upiId-main">
        <Link to="./UpiIdPage">
        <UPIID/>
        </Link>
        <Link to="./TransitionHistroy">
        <TransationHistroy/>
        </Link>
        <CheckBalence/>
        </div>
        <div className="imgAddress">
          <Link to="./Share">
          <img src="https://paisawasooldeal.in/wp-content/uploads/2022/02/Google-Pay-Referral-Code-2.webp" />
          </Link>
        </div>

      </div>




    </div>
  )
}

export default HomePage