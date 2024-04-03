import { useDispatch } from "react-redux";
import { CDN_URL } from "../../utils/URL";
import { addItem, removeItem } from "../../utils/cartSlice";

const Dish=({itemList})=>
{
  const dispatch=useDispatch();

  const handleButton=(item)=>{
    dispatch(addItem(item));
    alert("Added to Cart");
    
  }
  const handleRemoveButton=(item)=>{
    dispatch(removeItem(item));
  }
    return(
    <div>
    {itemList.map((item,index)=>(
        <div className="flex justify-between text-sm border-b-2 border-gray-400 p-3">
        <div className=' w-9/12'>
          <div className="pb-5 " >
            <span className='text-md'>{item.card.info.name}</span>
            <span className='text-md '> -  ₹{item.card.info.price/100 || item.card.info.defaultPrice/100}</span>
          </div>
          <div>
            <span className='text-xs'>{item.card.info.description}</span>
          </div>

        </div>
        <div className='w-3/12 px-2'>
          <img className="rounded-lg w-12/12" src={CDN_URL+item.card.info.imageId}></img>
          <div className="p-1 m-auto flex justify-between">
          <button className="bg-black p-2 w-3/12 rounded-xl cursor-pointer text-white" onClick={()=>handleButton(item)}>+</button>
          <button className="bg-black p-2 w-3/12 rounded-xl cursor-pointer text-white" onClick={()=>handleRemoveButton(item)}>-</button>
          </div>
        </div>
      </div>
    ))}
    </div>);
}

export default Dish;