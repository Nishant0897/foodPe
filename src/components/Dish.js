const Dish=(props)=>
{
    const {itemCards}=props;
    console.log(itemCards);
    if(itemCards!=null)
    {
    return(
        
            <div className="flex justify-center text-md px-5 hover:bg-orange-100">
            <ul>
            {itemCards.map(item =>(
            <li key={item.card?.info?.id}>{item.card?.info?.name} - Rs {item.card?.info?.defaultPrice/100 || item.card?.info?.price/100}</li>
        ))}
            </ul>               
        </div>
        
        

    )}
}

export default Dish;