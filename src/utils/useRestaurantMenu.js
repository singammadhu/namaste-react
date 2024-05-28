import { MENU_API } from "./constants";
import { useState,useEffect} from "react";
 
const useRestaurantMenu=(resId)=>{

    const [resInfo, setResInfo] = useState(null);
    const fetchMenu = async () => {
        try {
            const response = await fetch(MENU_API+resId);
            const json = await response.json();
            setResInfo(json.data);
        } catch (error) {
            console.error("Failed to fetch menu:");
         }
    };

    useEffect(() => {
        fetchMenu();
    }, []);

    return resInfo;
}
export default useRestaurantMenu;