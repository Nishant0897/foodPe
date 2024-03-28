import { useEffect, useState } from "react";
import { MENU_API } from "../../utils/URL";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import CollapsibleButton from "./CollapsibleButton";




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
    const {name,cuisines,costForTwoMessage}=resInfo?.cards[2]?.card?.card?.info;
    const {itemCards} =resInfo?.cards[4]?.groupedCard?.cardGroupMap.REGULAR?.cards[5]?.card?.card;
    const {cards}=resInfo?.cards[4]?.groupedCard?.cardGroupMap.REGULAR;
    
    
    return (
        <><div className="menu pt-5">
    <h3 className=" text-center font-serif text-lg">{name}</h3>
    <p className=" text-center font-serif text-base">{cuisines.join(", ")} - {costForTwoMessage}</p>
    <CollapsibleButton catData={cards}/>
    
    
</div>
</>)

};

export default RestaurantMenu;