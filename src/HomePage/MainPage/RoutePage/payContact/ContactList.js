import React from 'react';
import "./PayContact.css";

const ContactList = () => {
  const Contact=[{name:"artel", img:"https://cdn-icons-png.flaticon.com/512/21/21104.png",contact:"734395"},{name:"jio", img:"https://cdn-icons-png.flaticon.com/512/21/21104.png" , contact:"734395874"},{name:"artel", img:"https://cdn-icons-png.flaticon.com/512/21/21104.png",contact:"734395"},{name:"jio", img:"https://cdn-icons-png.flaticon.com/512/21/21104.png" , contact:"734395874"},
  {name:"artel", img:"https://cdn-icons-png.flaticon.com/512/21/21104.png",contact:"734395"},{name:"jio", img:"https://cdn-icons-png.flaticon.com/512/21/21104.png" , contact:"734395874"},
  {name:"artel", img:"https://cdn-icons-png.flaticon.com/512/21/21104.png",contact:"734395"},{name:"jio", img:"https://cdn-icons-png.flaticon.com/512/21/21104.png" , contact:"734395874"},
  {name:"artel", img:"https://cdn-icons-png.flaticon.com/512/21/21104.png",contact:"734395"},{name:"jio", img:"https://cdn-icons-png.flaticon.com/512/21/21104.png" , contact:"734395874"},
  {name:"artel", img:"https://cdn-icons-png.flaticon.com/512/21/21104.png",contact:"734395"},{name:"jio", img:"https://cdn-icons-png.flaticon.com/512/21/21104.png" , contact:"734395874"}
  
]
  return (
    Contact.map((ele, index)=>{
        return(
            <div className="contact-list-itm" key={index}>
               <div className="contact-list-itm-icon">
               <img src={ele.img}/>
               </div>
                <div className="contact-name">
                <h3>{ele.name}</h3>
                <p>{ele.contact}</p>
                </div>
            </div>
        )
    })
  )
}

export default ContactList;