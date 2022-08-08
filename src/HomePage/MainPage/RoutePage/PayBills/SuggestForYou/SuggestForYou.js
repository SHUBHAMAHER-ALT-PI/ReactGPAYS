import React from 'react';
import "./SuggestForYou.css";


const SuggestForYou = ({data}) => {
  return (
    <div className="SuggestForYou">
        <img src={data.img}/>
        <div className="SuggestForYou-name">{data.name.slice(0,5)}...</div>
    </div>
  )
}

export default SuggestForYou;