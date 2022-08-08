import React from 'react';
import "./MobileRecharge.css";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ReachargeUser from '../../PayBills/ReachargeUser/ReachargeUser';
import SuggestForYou from '../../PayBills/SuggestForYou/SuggestForYou';
import MobileOperator from './MobileOperator/MobileOperator';
import { Link } from 'react-router-dom';

const MobileRecharge = () => {
    const myreacharge = [{ name: "Shubham Aher", mono: "8254375", img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80" },
    { name: "Sanket Aher", mono: "8254375", img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80" },
    ]
    const SuggestForYouitm = [{
        name: "Kalyani Sanap", img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
    },
    {
        name: "Sanket Topale", img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
    },
    {
        name: "Kalyani Sanap", img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
    },
    {
        name: "Sanket Topale", img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
    },
    {
        name: "Kalyani Sanap", img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
    },
    {
        name: "Sanket Topale", img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"
    }]
    const mobileOperator=[{name:"Jio",img:"https://dog55574plkkx.cloudfront.net/storelogo/web/vodafone-new-sim.png"},{name:"Airetel",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc-9sywwcqIq34lg5hDOntw4oMbQDw14VPXQ&usqp=CAU"},{name:"VI",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc-9sywwcqIq34lg5hDOntw4oMbQDw14VPXQ&usqp=CAU"}]
    return (
        <div className="mobile-recharge">
            <div className="mobile-recharge-top-dot-back">
            <Link to="/">
                <ArrowBackIcon />
    </Link>
                <strong>Mobile Recharge</strong>
                <MoreVertIcon />

            </div>
            <div className='enter-mobile-no'>
                <strong>Enetr mobile number</strong>
                <div className="countrycode-recharge">
                    <div><button><img src='https://seeklogo.com/images/I/Indian_Flag-logo-19B702FA68-seeklogo.com.png' /> <span>+91</span></button></div>
                    <input placeholder='0000000000' />
                    <AccountCircleIcon fontSize='large' className="user-logo-reacharge" />
                </div>
                <div className="mobile-recharge-my-recharge">
                    <div className="my-recharge-h">
                        <strong>My Reachare</strong>
                        <div className="my-recharge-seemore">See more</div>
                    </div>
                    <div>
                        {
                            myreacharge.map((data, ind) => {
                                if (ind < 6) {
                                    return (
                                        <ReachargeUser ReachargeUser={data} />
                                    )
                                }
                            })
                        }
                    </div>

                </div>
                <div className="mobile-recharge-SuggestForYou">
                    <strong>Suggest For You</strong>
                    <div className="mobile-recharge-SuggestForYou-itm">
                        {
                            SuggestForYouitm.map((data, ind) => {
                                return (
                                    <SuggestForYou data={data} />
                                )
                            })

                        }
                    </div>

                </div>
                <div className="mobile-recharge-mobile-operators">
                    <strong>Mobile operators</strong>
                    <div className="mobile-recharge-mobile-operators-list">
                        {
                            mobileOperator.map((data,ind)=>{
                                return(
                                    <MobileOperator data={data}/>
                                )
                            })

                        }
                    </div>
                </div>

            </div>

        </div>
    )
}

export default MobileRecharge