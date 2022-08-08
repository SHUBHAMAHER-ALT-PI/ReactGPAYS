import React from 'react';
import "./Share.css";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CopyAllIcon from '@mui/icons-material/CopyAll';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ContactList from '../payContact/ContactList';
import SearchBar from '../../../TopBar/SearchBox/SearchBar';
const Share = () => {
    const shareIcon=[{name:"whatsApp",tag:<WhatsAppIcon/>},
    {name:"Copy",tag:<CopyAllIcon/>},
    {name:"More",tag:<MoreHorizIcon/>}]
  return (
    <div className="share">
        <div className="share-heading">
            <strong>Check out Payment bank with me</strong> <br/>
            <span>I am Shering Payment Banke Link With you 
                My Share Code is "Abdcr"
            </span>
        </div>
        <hr />
        <div className='share-logo'>
            
            
           {
            shareIcon.map((data,ind)=>{
                return(
                    <div className='share-icon-main'>
                    <div className='share-icon-logo'>{data.tag}</div>
                   
                    <div>{data.name}</div>
                </div>
                )
            })
           }
        </div>
        <hr/>
        <SearchBar/>
        <div className="share-contact-name">Phone Contact</div>
        <ContactList/>
    </div>
  )
}

export default Share;
