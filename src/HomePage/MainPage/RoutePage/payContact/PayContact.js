import React from 'react';
import "./PayContact.css";
import SearchBar from '../../../TopBar/SearchBox/SearchBar'
import ContactList from './ContactList';

const PayContact = () => {
  return (
    <>
    <div className='main-paytoContact'>
        <SearchBar/>
        <div className="all-itm">
        {
             [{name:"artel", img:"img"},{name:"jio", img:"img"}, {name:"home Bill", img:"img"},{name:"TV Bill", img:"img"},
             {name:"Electricity", img:"img"},{name:"shubhm", img:"img"}
             ,{name:"shubhm", img:"img"},{name:"shubhm", img:"img"},
             {name:"shubhm", img:"img"},{name:"shubhm", img:"img"}
         ].map((ele, index) => {
            return (
                <div className="itm-row">
                <img src={ele.img}/>
                <p>{ele.name}</p>
                </div>
            );
         })
        }
        </div>
        <div>All People</div>
    <ContactList/>
    </div>
    </>
  )
}

export default PayContact