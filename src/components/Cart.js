import { useDispatch, useSelector } from "react-redux";
import Dish from "./Dish";
import { removeCart } from "../../utils/cartSlice";

const Cart=()=>
{
    const cartItem=useSelector((store)=>store.cart.items);
    const dispatch=useDispatch();
    const handleCartButton=()=>{
        dispatch(removeCart());
    }
   
    const Bill=()=>{
        let total=0;
        (cartItem).forEach(element => {
            total=total+element.card.info.price/100 || element.card.info.defaultPrice/100
        });
        return Math.round(total*100)/100;
    }
    
    return (
        <>
        <div >
            <div className="text-center font-sans text-orange-400 pt-3 text-3xl">
            <h1>What's on plate 🍳</h1>
            <div className="m-auto w-4/12 font-sans text-gray-800 pt-3 text-xl border-b-2 pb-2 flex flex-wrap justify-between">
            <h3>Total Bill 💰💸 : ₹{Bill()}</h3>
            <button className="bg-gray-700 p-2 pb-2 h-10 rounded-xl cursor-pointer text-white" onClick={()=>handleCartButton()}>Clear 🛒</button>
            </div>
            </div>
            <div className="w-6/12 m-auto font-sm pt-4">
                <Dish  itemList={cartItem}/>
            </div>
            
            
        </div></>
        
        
    );

    }
export default Cart;