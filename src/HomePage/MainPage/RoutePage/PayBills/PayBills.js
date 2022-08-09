import React from 'react';
import "./PayBills.css";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ReachargeUser from './ReachargeUser/ReachargeUser';
import PaymentCategories from './PaymentCategories/PaymentCategories';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';

import LightbulbIcon from '@mui/icons-material/Lightbulb';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import SuggestForYou from './SuggestForYou/SuggestForYou';
import { Link } from 'react-router-dom';
const PayBills = () => {
    const ReachareUser=[{name:"Shubbhma"}];
    const SuggestForYouitm=[{name:"BMC",img:"https://c8.alamy.com/comp/2FYETMB/google-pay-logo-2FYETMB.jpg"},
    {name:"BMC",img:"https://c8.alamy.com/comp/2FYETMB/google-pay-logo-2FYETMB.jpg"},
    {name:"BMC",img:"https://c8.alamy.com/comp/2FYETMB/google-pay-logo-2FYETMB.jpg"},
    {name:"BMC",img:"https://c8.alamy.com/comp/2FYETMB/google-pay-logo-2FYETMB.jpg"}
]
    const FinanceAndTax= [{name:"xyz",tag:<CreditCardIcon/>},{name:"xyz",tag:<CreditCardIcon/>},{name:"xyz",tag:<CreditCardIcon/>},{name:"xyz",tag:<CreditCardIcon/>},{name:"xyz",tag:<CreditCardIcon/>}]
   const utilityBills=[{name:"xyz",tag:<LightbulbIcon/>},{name:"xyz",tag:<LightbulbIcon/>},{name:"xyz",tag:<LightbulbIcon/>},{name:"xyz",tag:<LightbulbIcon/>},{name:"xyz",tag:<LightbulbIcon/>}]
    const reacharge=[{name:"Mobile Reachare", tag:<PhoneAndroidIcon/>},{name:"Mobile Reachare", tag:<PhoneAndroidIcon/>},{name:"Mobile Reachare", tag:<PhoneAndroidIcon/>}]
  return (
    <div className="PayBills">
        <div className="PayBill-top-dot-back">
        <Link to="/ReactGPAYS">

    <ArrowBackIcon/>
    </Link>
    <input type="text" className='input' placeholder='Recipient Name'/>
    <MoreVertIcon/>

  </div>
  <div className="your-check-list">
    <div className="your-check-list-name">
        <div>Your Checklist ({ReachareUser.length})</div>
        <div className="addNew"> Add New </div>
    </div>
    {ReachareUser.map((data,ind)=>{
      if(ind<4){
        return (
            <ReachargeUser ReachargeUser={data}/>
        )
      }
    })}
    <button type='submit' className='view-More-btn-check-list'>View All</button>
  </div>
  <div className='payment-categories'>
    <p>Payment categories</p>
   <div className='payment-categories-list'>
    {
        reacharge.map((data,ind)=>{
            if(ind<3){
                return(
                    <PaymentCategories data={data}/>
                )
            }

        })
        
    }
    {
        utilityBills.map((data,ind)=>{
            if(ind<3){
                return(
                    <PaymentCategories data={data}/>
                )
            }
        })
    }
   
   {
        FinanceAndTax.map((data,ind)=>{
            if(ind<3){
                return(
                    <PaymentCategories data={data}/>
                )
            }
        })
    }
   </div>
   <button type='submit' className='view-More-btn-check-list'>View All</button>
  </div>
  <div className="suggestForYou">
    <div>Suggest For You</div>
    <div className="suggestForYou-list">
        {
            SuggestForYouitm.map((data,ind)=>{
                return(
                    <SuggestForYou data={data}/>
                )
            })
        }
        
    </div>
  </div>
    </div>
  )
}

export default PayBills;