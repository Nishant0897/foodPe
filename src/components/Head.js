import { useState } from "react";
import { LOGO_URL } from "../../utils/URL";

const Head=()=>
{
    const [loginBtn,setLoginBtn]=useState("Login");
    return (
    <><div className="headContainer">
            
            <img src={LOGO_URL} className="res-logo" />
            
            <ul className="nav-container">
                <li>Home</li>
                <li>About Us</li>
                <li>Cart</li>
                <button className="login-btn" onClick={()=>
                {
                    loginBtn==="Login"?setLoginBtn("Logout"):setLoginBtn("Login");
                }}>{loginBtn}</button>
            </ul>
            </div></>
    
    )

}

export default Head;