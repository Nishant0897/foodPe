import Card from "./Card";
import resList from "../../utils/mockData";
import { useState } from "react";


const Body=()=>
{
    const [filterList,setFilterList]=useState(resList);
    return (
        <><div className="filter">
            <button className="filter-btn" onClick={()=>
            {const fList=filterList.filter((res)=>res.info.avgRating>4.4);
                setFilterList(fList);
            }

            }>Top Rated Restaurant</button>
            </div>
        <div className="res-container">
            {
                filterList.map((restaurant)=>(
                <Card key={restaurant.info.id} resData={restaurant}/>
                ))
            }
            
        </div></>
    );
    
};

export default Body;