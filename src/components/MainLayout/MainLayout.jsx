import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Header/Navbar/Navbar";
import { useEffect } from "react";
const MainLayout = () => {
    // uselocation hook diye website er title e dynamic route show kora jay
    // like , About-Programming-hero, profile-programming-hero, home-programming-hero
    const currentLocation = useLocation()
    useEffect(()=>{
        if(currentLocation.pathname === '/'){
            document.title = 'Phone-Home'
        }
        else{
            document.title = `Phone ${currentLocation.pathname.replace('/', '-')}`
        }
    },[currentLocation.pathname])

    return (
        <div>
           <Navbar></Navbar>
           <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;