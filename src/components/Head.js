import { useState } from "react";
import { LOGO_URL } from "../../utils/URL";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";
import { useSelector } from "react-redux";


const Head=()=>
{
    const [loginBtn,setLoginBtn]=useState("Login");
    const onlineStatus=useOnlineStatus();

    const cartItems=useSelector((store)=>store.cart.items);
    return (
    <><div className="flex justify-between shadow-lg">
            
            <img src={LOGO_URL} className="w-20" />
            
            <ul className="flex items-center">
                <li className="px-5">Online Status : {onlineStatus?"🟢":"🔴"}</li>
                <li className="px-5"><Link to='/'>Home</Link></li>
                <li className="px-5"><Link to='/about'>About</Link></li>
                <li className="px-5"><Link to='/cart'>🛒[{cartItems.length}]</Link></li>
                <button type="button" className="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-8 py-2.5 text-center me-2 mb-2 " onClick={()=>
                {
                    loginBtn==="Login"?setLoginBtn("Logout"):setLoginBtn("Login");
                }}>{loginBtn}</button>
            </ul>
            </div></>
    
    )

}

export default Head;