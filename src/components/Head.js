import { useState } from "react";
import { LOGO_URL } from "../../utils/URL";
import { Link } from "react-router-dom";

const Head=()=>
{
    const [loginBtn,setLoginBtn]=useState("Login");
    return (
    <><div className="headContainer">
            
            <img src={LOGO_URL} className="res-logo" />
            
            <ul className="nav-container">
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/cart'>Cart</Link></li>
                <button className="login-btn" onClick={()=>
                {
                    loginBtn==="Login"?setLoginBtn("Logout"):setLoginBtn("Login");
                }}>{loginBtn}</button>
            </ul>
            </div></>
    
    )

}

export default Head;