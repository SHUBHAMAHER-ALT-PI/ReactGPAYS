import React from 'react';
import "./ReachargeUser.css";

const ReachargeUser = ({ReachargeUser}) => {
  return (
    <div className="ReachargeUser-each">
        <img src={ReachargeUser.img} alt={ReachargeUser.title} />
        <div className='reacharge-user-name-mono'><div className="ReachargeUser-name"><strong>{ReachargeUser.name}</strong></div>
        <p>Mobile Recharge</p>
        <div>+91 {ReachargeUser.mono}</div>
        </div>
    </div>
  )
}

export default ReachargeUser;