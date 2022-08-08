import React from 'react';
import "./MobileOperator.css";

const MobileOperator = ({data}) => {
  return (
    <div className="MobileOperator">
        <img src={data.img}/>
        <div><strong>{data.name}</strong></div>
    </div>
  )
}

export default MobileOperator