import { LOGO_URL } from "../../utils/URL";

const Head=()=>
{
    return (
    <><div className="headContainer">
            
            <img src={LOGO_URL} className="res-logo" />
            
            <ul className="nav-container">
                <li>Home</li>
                <li>About Us</li>
                <li>Cart</li>
            </ul>
            </div></>
    
    )

}

export default Head;