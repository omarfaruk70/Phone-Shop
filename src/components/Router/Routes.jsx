import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Home/Home";
import Favourites from "../Favourites/Favourites";
import Login from "../Login/Login";
import ErrorPage from "../ErrorPage/ErrorPage";
import PhoneDetails from "../PhoneDetails/PhoneDetails";

const myCreatedRoutes = createBrowserRouter([
   {
    path: '/',
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
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
        {
            path: '/phone/:id',
            element: <PhoneDetails></PhoneDetails>,
            loader: ()=> fetch('../phones.json')
        }
    ]
    
   }

])
export default myCreatedRoutes;