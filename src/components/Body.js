import Card from "./Card";
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

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData=async ()=>{
        const data=await fetch("https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.835193562411742&lng=81.01350847631693&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json=await data.json();
        setFilterList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setResList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    if(filterList.length === 0)
    {
        return <Shimmer/>
    }

    return (
        <><div className="filter">
            <button className="filter-btn" style={{marginRight:20}}onClick={()=>
            {const fList=resList.filter((res)=>res.info.avgRating>4.4);
                setFilterList(fList);
            }
            }>Top Rated Restaurant</button>
            <button className="btn" style={{marginRight:20}} onClick={()=>
            {
                setFilterList(resList);
            }
            }>All Restaurant</button>
            </div>
            
        <div className="search-container">
            <input 
            type="text" 
            className="search-input"
            placeholder="Search a restaurant you want ...." 
            value={searchText} onChange={(e)=>{setSearchText(e.target.value)}}></input>
            <button
          className="search-btn"
          onClick={() => {
            const data = filterData(searchText, resList);
            setFilterList(data);
          }}
        >
          Search
        </button>
        </div>
        
        <div className="res-container">
            {
                filterList.map((restaurant)=>(
                <Link style={linkStyle} key={restaurant.info.id} to={"/restaurants/"+restaurant.info.id}><Card  resData={restaurant}/></Link>
                ))
            }
            
        </div></>

    );
    
}
    

export default Body;