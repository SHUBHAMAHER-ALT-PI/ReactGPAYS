import React from 'react';
import "./Bussiness.css";

const Bussiness = () => {
    return (
        [{name:"Alt Pi", img:"https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"},{name:"altpi", img:"https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"}, {name:"alt pi", img:"https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"},{name:"any name", img:"https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"},
        {name:"alt pi", img:"img"},{name:"shubhm", img:"img"}
        ,{name:"alt pi", img:"img"},{name:"shubhm", img:"img"},
        {name:"alt pi", img:"img"},{name:"shubhm", img:"img"}
    ].map((ele, ind)=>{
        if(ind<4){
            return (
                <div className="bussiness-itm">
                <img src={ele.img} />
                <p>{ele.name}</p>
                </div>
            )
        }
    
    })
      )
}

export default Bussiness;