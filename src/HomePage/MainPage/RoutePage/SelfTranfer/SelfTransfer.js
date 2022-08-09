import React from 'react';
import "./SelfTransfer.css";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
const SelfTransfer = () => {
    const banks=[{name:"Central Bank Of india",img:"/", acno:"2023",accountType:"savings Account"}]
  return (
    <div className="SelfTransfer">
         <div className="SelfTransfer-top-dot-back">
            <Link to="/ReactGPAYS">

      <ArrowBackIcon/>
            </Link>
     <h4>Self Tranfer</h4>
      <MoreVertIcon/>

    </div>
    <div className='SelfTransfer-body'>
        <p>Manage Your money better by adding another account to make self traansfers</p>
    {
        banks.map((bank, index) => {
            return(
                <div className='Bank-details-div'>
                    <div className="Bank-details-div-img">
                        <img src={bank.img}/>
                    </div>
                    <div className="Bank-details-div-details">
                        <div>{bank.name} ****{bank.acno}</div>
                        <p>{bank.accountType}</p>

                    </div>
                </div>
            )
        })
    }
    <div className='add-Bank-details-div'>
                    <div className="add-Bank-details-div-img">
                        <AccountBalanceIcon className='add-Bank-details-div-img1'/>
                    </div>
                    <div className="add-Bank-details-div-details">
                        Add Bank Account

                    </div>
                </div>
    </div>
    </div>
  )
}

export default SelfTransfer;