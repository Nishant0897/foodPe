import React, { useState } from 'react';
import Dish from "./Dish";

function ResCategory(props) {
  const {catData,showItem,setShowItem}=props;
  const [hide,setHide]=useState(true);


  
  const toggleData = () => {
    
    if(showItem){
      setHide(!hide);
    }else
    {
    setShowItem();
    setHide(true);
    }
  
  };

  return (
    <div className='py-2 '>
    <div className='w-6/12 m-auto font-sans bg-gray-50 p-3 shadow-lg shadow-slate-400'>
        <div className='flex justify-between font-semibold text-xl' >
          <span className="cursor-pointer" onClick={toggleData}>{catData.title} ({catData.itemCards.length})</span>
          <span>🔽</span>
        </div>
        {
          hide&&showItem && <Dish key={catData.title} itemList={catData.itemCards}/>
        }
    </div></div>
  );
}

export default ResCategory;
