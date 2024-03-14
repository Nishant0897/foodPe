import { CDN_URL } from "../../utils/URL";

const Card=(props)=>
{
    const {resData}=props;
    const {
        name,
        cuisines,
        avgRating
    }=resData?.info;
    return (<div className="res-card" style={{width:220}}>
    <img className="res-image" src={CDN_URL+resData.info.cloudinaryImageId} />
    <div className="res-detail">
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <p>{avgRating}⭐</p>
        <p>{resData.info.sla.deliveryTime} mins</p>
    </div>
    
</div>)
}

export default Card;