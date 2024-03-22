import { useEffect, useState } from "react";
import { MENU_API } from "../../utils/URL";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";




const RestaurantMenu=()=>
{
    const [resInfo,setResInfo]=useState(null);
    const {resId}=useParams();

    const fetchMenu=async ()=>
    {
        const data =await fetch(MENU_API+resId);
        const json=await data.json();
        setResInfo(json.data);
        console.log(resInfo);
    }
    useEffect(()=>{
        fetchMenu();
    },[]);

    if (resInfo===null) return <Shimmer/>;

    console.log(resInfo);
    const {name,cuisines,costForTwoMessage}=resInfo?.cards[0]?.card?.card?.info;
    const {itemCards} =resInfo?.cards[2]?.groupedCard?.cardGroupMap.REGULAR?.cards[5]?.card?.card;
    
    return (
        <><div className="menu">
    <h3>{name}</h3>
    <p>{cuisines.join(", ")} - {costForTwoMessage}</p>
    
    <ul>
        {itemCards.map(item =>(
            <li key={item.card?.info?.id}>{item.card?.info?.name} - Rs {item.card?.info?.defaultPrice/100 || item.card?.info?.price/100}</li>
        ))}
    </ul>
    
    
</div>
</>)

};

export default RestaurantMenu;