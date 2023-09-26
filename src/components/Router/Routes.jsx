import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Home/Home";
import Favourites from "../Favourites/Favourites";
import Login from "../Login/Login";

const myCreatedRoutes = createBrowserRouter([
   {
    path: '/',
    element: <MainLayout></MainLayout>,
    children: [
        {
            path: '/',
            element: <Home></Home>,
        },
        {
            path: '/favourites',
            element: <Favourites></Favourites>,
        },
        {
            path: '/login',
            element: <Login></Login>,
        },
    ]
    
   }

])
export default myCreatedRoutes;