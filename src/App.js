import React from "react";
import ReactDOM from "react-dom/client";
import Head from "./components/Head";
import Body from "./components/Body";
import About from "./components/About";
import Cart from "./components/Cart";
import Error from "./components/Error";
import { Provider } from "react-redux";


import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
import appStore from "../utils/appStore";

const AppLayout=()=>
{
   return (
    <Provider store={appStore}>
   <div className="app">
    <Head/>
    <Outlet/>
    </div>
    </Provider> )
}
const appRouter=createBrowserRouter([
    {
        path:'/',
        element:<AppLayout/>,
        children:[
            {
                path:'/',
                element:<Body/>,
                
            },
            {
                path:'/about',
                element:<About/>,
                
            },
            {
                path:'/cart',
                element:<Cart/>,
            },
            {
                path:"/restaurants/:resId",
                element:<RestaurantMenu/>,
            },
        

        ],
        errorElement:<Error/>,
    },
    
])
const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);