import React, { useState } from 'react';
import Dish from "./Dish";

function CollapsibleButton(props) {
  const [isOpen, setIsOpen] = useState(false);
  const {catData}=props


  
  const toggleList = () => {
    setIsOpen(!isOpen);
  };

  return (<>

    <div >
       {catData.map((category,index) =>(
        
        <div className='flex justify-center'>
        <div className='w-[500px] py-3 text-center border-2 border-b-orange-100 ' >
               <button className=' font-semibold py-2 text-lg shadow-xl px-5' onClick={toggleList} key={index}>{category.card?.card?.title} </button>
               {isOpen && (<Dish itemCards={category?.card?.card?.itemCards} />)}
           </div>
           </div>
           
        ))}
        
      
      </div></>
  );
}

export default CollapsibleButton;
