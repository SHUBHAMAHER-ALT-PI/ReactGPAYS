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
        <Route path="/scan" element={<Scan/>}/>
        <Route path="/" element={<HomePage/>}/>
        <Route path='/PayContact' element={<PayContact/>}/>
        <Route path='/PayPhone' element={<PayPhone/>}/>
        <Route path='/PayinBank' element={<BankTransfer/>}/>
        <Route path='/PayWithUpi' element={<PayWithUpi/>}/>
        <Route path='/SelfTransfer' element={<SelfTransfer/>}/>
        <Route path='/paybills' element={<PayBills/>}/>
        <Route path='/MobileRecharge' element={<MobileRecharge/>}/>
        <Route path='/UpiIdPage' element={<UpiIdPage/>}/>
        <Route path='/TransitionHistroy' element={<TransitionHistroy/>}/>
        <Route path='/Share' element={<Share/>}/>
        {/* <Route path="/" element={<Layout />}>
          
        </Route> */}
        
      </Routes>
    </>
  )
}

export default MainRouts