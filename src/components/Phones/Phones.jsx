import { useEffect, useState } from "react";
import Phone from "../Phone/Phone";

const Phones = () => {
    const [phones, setPhones] = useState([]);
    useEffect(()=>{
        fetch('phones.json')
        .then(res => res.json())
        .then(data => setPhones(data))
    },[])
    return (
        <div>
            <h1 className="text-2xl font-bold text-center py-5">All categories phones</h1>

            <div className="grid grid-cols-1 gap-5 py-5 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
                {
                    phones?.map(phone => <Phone key={phone.id} phone={phone}></Phone>)
                }
            </div>
        </div>
    );
};

export default Phones;