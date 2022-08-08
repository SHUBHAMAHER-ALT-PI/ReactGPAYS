import React from 'react';
import "./TransationUser.css";

const TransationUser = ({data}) => {
  return (
    <div className="TransationUser">
        <div className='TransationUser-logo-name'>
        <div className='TransationUser-logo'>
            <img src={data.img}/>

        </div>
        <div className='TransationUser-name-data-time'>
            <div className='TransationUser-name'>
                {data.name}

            </div>
            <div  className='TransationUser-date-time'>
                <span>{data.date}</span> at
                <span>{data.time}</span>

            </div>
        </div>
        </div>
        <div className='TransationUser-payment'>
            <div>{data.pay}</div>
            {data.failed ?<div className='Transation-failed'>Failed</div>:null}
        </div>
    </div>
  )
}

export default TransationUser