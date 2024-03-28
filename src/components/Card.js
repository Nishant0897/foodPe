import { CDN_URL } from "../../utils/URL";

const Card=(props)=>
{
    const {resData}=props;
    const {
        name,
        cuisines,
        avgRating
    }=resData?.info;
    return (<div className="p-2 m-3 w-[200px] rounded-lg bg-gray-100 hover:bg-gray-200">
    <img className="p-2 rounded-xl w-[100%] h-[150px] " src={CDN_URL+resData.info.cloudinaryImageId} />
    <div className="p-2">
        <h3 className=" font-medium">{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <p>{avgRating}⭐</p>
        <p>{resData.info.sla.deliveryTime} mins</p>
    </div>
    
</div>)
}

export const withOpenCard=(Card)=>{
    return (props)=>{
        return (
        <div>
            <label className="absolute bg-slate-800 text-slate-50 px-2 rounded-lg">Order Now</label>
            <Card {...props} />
        </div>
        )
    }

    }


export default Card;