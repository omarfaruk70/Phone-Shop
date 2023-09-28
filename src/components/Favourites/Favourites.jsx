import { useEffect, useState } from "react";
import FavouriteCard from "../FavouriteCard/FavouriteCard";

const Favourites = () => {
    const [favourteitem, setFavouriteitem] = useState([]);
    const [noFound, setNoFound] = useState(false)
    useEffect(()=>{
        const getDataFromLocalStorage = JSON.parse(localStorage.getItem('favouritesPhone'));
      if(getDataFromLocalStorage){
        setFavouriteitem(getDataFromLocalStorage);
      }else{
        setNoFound('No Favourite items Found')
      }

    },[])
    console.log(favourteitem);
    return (
        <div>
          {noFound ? <p className="text-2xl flex h-screen items-center justify-center">{noFound}</p>
        :
        <div>
            <div className="grid grid-cols-2 mx-auto py-10">
                {
                    favourteitem.map(singleItem => <FavouriteCard key={singleItem.id} singleItem={singleItem}></FavouriteCard>)
                }
            </div>
            
        </div>}
        </div>
    );
};

export default Favourites;