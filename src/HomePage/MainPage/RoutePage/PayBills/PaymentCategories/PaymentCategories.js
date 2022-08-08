import React from 'react';
import "./PaymentCategories.css";

const PaymentCategories = ({data}) => {
  return (
    <div className="PaymentCategories-main">
        <div className="PaymentCategory-logo">{data.tag}</div>
        <div className="PaymentCategory-name">{data.name}</div>
    </div>
  )
}

export default PaymentCategories;