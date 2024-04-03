import { useEffect, useState } from "react";
import { MENU_API } from "../../utils/URL";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import ResCategory from "./ResCategory";




const RestaurantMenu=()=>
{
    const [resInfo,setResInfo]=useState(null);
    const {resId}=useParams();
    const [showItem,setShowItem]=useState(null);

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
    const cards=resInfo?.cards[4]?.groupedCard?.cardGroupMap.REGULAR.cards.filter(c=>(c.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"));
    
    
    return (
        <><div className="menu pt-5">
        <h3 className=" text-center font-serif text-2xl font-bold">{name}</h3>
        <p className=" text-center font-serif text-base">{cuisines.join(", ")} - {costForTwoMessage}</p>  
        </div>
        {cards.map((category,index)=>(
            <ResCategory key={category?.card.card.tittle} 
            catData={category?.card.card} 
            showItem={index===showItem?true:false}
            setShowItem={()=>setShowItem(index)}/>
        ))}
</>)

};

export default RestaurantMenu;