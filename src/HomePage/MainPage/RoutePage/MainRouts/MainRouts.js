import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from '../../../HomePage';
import BankTransfer from '../BankTrasfer/BankTransfer';
import PayBills from '../PayBills/PayBills';
import PayContact from '../payContact/PayContact';
import PayPhone from '../PayPhoneNumber/PayPhone';
import PayWithUpi from '../PayWithUpi/PayWithUpi';
import Scan from '../ScanQr/Scan';
import SelfTransfer from '../SelfTranfer/SelfTransfer';
import Share from '../SharePage/Share';
import TransitionHistroy from '../TransitionHistroy/TransitionHistroy';
import UpiIdPage from '../UpiIdPage/UpiIdPage';
import MobileRecharge from './MobileRecharge/MobileRecharge';
const MainRouts = () => {
  return (
    <>
     <Routes>
        <Route path="/ReactGPAYS/scan" element={<Scan/>}/>
        <Route path="/ReactGPAYS" element={<HomePage/>}/>
        <Route path='/ReactGPAYS/PayContact' element={<PayContact/>}/>
        <Route path='/ReactGPAYS/PayPhone' element={<PayPhone/>}/>
        <Route path='/ReactGPAYS/PayinBank' element={<BankTransfer/>}/>
        <Route path='/ReactGPAYS/PayWithUpi' element={<PayWithUpi/>}/>
        <Route path='/ReactGPAYS/SelfTransfer' element={<SelfTransfer/>}/>
        <Route path='/ReactGPAYS/paybills' element={<PayBills/>}/>
        <Route path='/ReactGPAYS/MobileRecharge' element={<MobileRecharge/>}/>
        <Route path='/ReactGPAYS/UpiIdPage' element={<UpiIdPage/>}/>
        <Route path='/ReactGPAYS/TransitionHistroy' element={<TransitionHistroy/>}/>
        <Route path='/ReactGPAYS/Share' element={<Share/>}/>
        {/* <Route path="/" element={<Layout />}>
          
        </Route> */}
        
      </Routes>
    </>
  )
}

export default MainRouts