import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory=({data,showItems,setShowIndex})=>{

     const handleClick=()=>{
     setShowIndex();
    }
    return(

     <div>
         <div className="w-6/12 mx-auto my-5 bg-gray-100 shodow-lg p-4 round-lg">
             <div className="flex justify-between cursor-pointer"
             onClick={handleClick} >
             <span className="font-bold text-lg">
                {data.title} ({data?.itemCards?.length})</span>
             <span>⬇️</span>
            </div>

            
            {showItems && <ItemList items={data?.itemCards}/>}
           
        </div>
    </div>
    )
}

export default RestaurantCategory;