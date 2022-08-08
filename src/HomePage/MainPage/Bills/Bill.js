import React from 'react';
import "./Bill.css";


const Bill = () => {
    return (
        [{name:"artel", img:"https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"},{name:"jio", img:"https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"}, {name:"home Bill", img:"https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"},{name:"TV Bill", img:"https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"},
        {name:"Electricity", img:"img"},{name:"shubhm", img:"img"}
        ,{name:"shubhm", img:"img"},{name:"shubhm", img:"img"},
        {name:"shubhm", img:"img"},{name:"shubhm", img:"img"}
    ].map((ele, ind)=>{
        if(ind<4){
            return (
                <div className="bill-itm">
                <img src={ele.img} />
                <p>{ele.name}</p>
                </div>
            )
        }
    
    })
      )
}

export default Bill