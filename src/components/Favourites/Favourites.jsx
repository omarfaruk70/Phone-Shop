import { useEffect, useState } from "react";
import FavouriteCard from "../FavouriteCard/FavouriteCard";

const Favourites = () => {
    const [favourteitem, setFavouriteitem] = useState([]);
    const [noFound, setNoFound] = useState(false);
    const [isShow, setIsShow] = useState(false)
    useEffect(()=>{
        const getDataFromLocalStorage = JSON.parse(localStorage.getItem('favouritesPhone'));
      if(getDataFromLocalStorage){
        setFavouriteitem(getDataFromLocalStorage);
      }else{
        setNoFound('No Favourite items Found')
      }
    },[])
    // console.log(favourteitem);

    const handleRemoveAll = () =>{
        localStorage.clear();
        setFavouriteitem([]);
        setNoFound('No Favourite items Found')
    }
    return (
        <div>
          {noFound ? <p className="text-2xl flex h-screen items-center justify-center">{noFound}</p>
        :
        <div>
            <div className="py-2 flex justify-center items-center">
                {
                favourteitem.length > 0 && <button onClick={handleRemoveAll} className="py-3 px-3 bg-blue-400 text-white rounded-lg">Clear All</button>
                }
            </div>
            <div className="grid grid-cols-2 mx-auto py-10">
                {
                    isShow ? favourteitem.map(singleItem => <FavouriteCard key={singleItem.id} singleItem={singleItem}></FavouriteCard>) 
                    :
                    favourteitem.slice(0, 4).map(singleItem => <FavouriteCard key={singleItem.id} singleItem={singleItem}></FavouriteCard>)
                }
            </div>

            <div className="py-2 flex justify-center items-center">
             <button onClick={()=> setIsShow(!isShow)} className="py-3 px-3 bg-blue-400 text-white rounded-lg">
                { isShow? 'See Less' : 'See More'}
                </button>
            </div>
            
        </div>}
        </div>
    );
};

export default Favourites;