import React from 'react';
import "./TransitionHistroy.css";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import TransationUser from './TransationUser/TransationUser';
import { Link } from 'react-router-dom';

const TransitionHistroy = () => {
    const transitionHistroy=[{name:"Shubham ",img:"https://cdn-icons-png.flaticon.com/512/21/21104.png", pay:"-14",failed:true,date:"21/23",time:"12:30Pm"},
    {name:"Nikita ",img:"https://cdn-icons-png.flaticon.com/512/21/21104.png", pay:"-14",failed:false,date:"21/23",time:"12:30Pm"},
    {name:"Rupesh ",img:"https://cdn-icons-png.flaticon.com/512/21/21104.png", pay:"-14",failed:true,date:"21/23",time:"12:30Pm"}
    ,{name:"Sagar ",img:"https://cdn-icons-png.flaticon.com/512/21/21104.png", pay:"-14",failed:false,date:"21/23",time:"12:30Pm"}
    ,{name:"Mahek ",img:"https://cdn-icons-png.flaticon.com/512/21/21104.png", pay:"-14",failed:true,date:"21/23",time:"12:30Pm"}
    ,{name:"any ",img:"https://cdn-icons-png.flaticon.com/512/21/21104.png", pay:"-14",failed:false,date:"21/23",time:"12:30Pm"},
    {name:"Shubham ",img:"https://cdn-icons-png.flaticon.com/512/21/21104.png", pay:"-14",failed:true,date:"21/23",time:"12:30Pm"},
    {name:"Shubham ",img:"https://cdn-icons-png.flaticon.com/512/21/21104.png", pay:"-14",failed:true,date:"21/23",time:"12:30Pm"},
    {name:"Shubham ",img:"https://cdn-icons-png.flaticon.com/512/21/21104.png", pay:"-14",failed:true,date:"21/23",time:"12:30Pm"},
    {name:"Shubham ",img:"https://cdn-icons-png.flaticon.com/512/21/21104.png", pay:"-14",failed:true,date:"21/23",time:"12:30Pm"}
]
  return (
    <div className="TransitionHistroy">
    <div className="TransitionHistroy-top-dot-back">
    <Link to="/ReactGPAYS">
    <ArrowBackIcon/>
    </Link>
    <MoreVertIcon/>

  </div>
  <div className="TransitionHistroy-heading">
    <h3>Transition Histroy</h3>
  </div>
  <div className='TransitionHistroy-list'>
    {

        transitionHistroy.map((data,ind)=>{
            return(
                <TransationUser data={data}/>
            )
        })
    }
  </div>
    </div>
  )
}

export default TransitionHistroy;