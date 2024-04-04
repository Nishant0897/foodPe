import Card,{withOpenCard} from "./Card";
import { useEffect, useState } from "react";
import { REST_API } from "../../utils/URL";
import Shimmer from "./Shimmer"
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavUnlisted=styled.ul`
text-decoration:none;`;

const linkStyle={
    textDecoration:"none",
    color:'rgb(46, 39, 38)'
};
function filterData(searchText, filterList) {
    const filterData = filterList.filter((restaurant) =>
      restaurant?.info?.name.toLowerCase().includes(searchText.toLowerCase())
    );
    return filterData;
  }
const Body=()=>
{
    const [searchText,setSearchText]=useState("");
    const [filterList,setFilterList]=useState([]);
    const [resList,setResList]=useState([]);
    const OpenCard=withOpenCard(Card);

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData=async ()=>{
        const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.835193562411742&lng=81.01350847631693&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json=await data.json();
        setFilterList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setResList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };
    if(filterList.length===0){
        return <Shimmer/>
    }
    else{
    return (
        <><div className="flex justify-center">
            <button className="px-3 py-2 m-5 shadow-md rounded-lg" onClick={()=>
            {const fList=resList.filter((res)=>res.info.avgRating>4.2);
                setFilterList(fList);
            }
            }>Top Rated Restaurant</button>
            <button className="px-3 py-2 m-5 shadow-md rounded-lg"  onClick={()=>
            {
                setFilterList(resList);
            }
            }>All Restaurant</button>
            </div>
            
        <div className="flex justify-center m-4 ">
            <input 
            type="text" 
            className="w-60 py-0.5 m-4 shadow-md pl-3"
            placeholder="Search a restaurant you want 🍟" 
            value={searchText} onChange={(e)=>{setSearchText(e.target.value)}}></input>
            <button
          className=" bg-orange-300 px-3 py-2 m-5 shadow-md rounded-xl"
          onClick={() => {
            const data = filterData(searchText, resList);
            setFilterList(data);
          }}
        >
          Search
        </button>
        </div>
      
        <div className="flex flex-wrap bg-orange-50">
            {
                
                filterList.map((restaurant)=>(
                <Link style={linkStyle} key={restaurant.info.id} to={"/restaurants/"+restaurant.info.id}>
                {
                    restaurant?.info?.availability?.opened?<OpenCard  resData={restaurant}/>:<Card  resData={restaurant}/>
                }
                </Link>
                ))
            }
            
        </div></>

    );}
    
}
    

export default Body;