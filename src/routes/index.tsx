import React from 'react';
import Home from "../pages/home";
import LearnWorld from "../pages/learnWorld";
import ReStudy from "../pages/reStudy"
import Mine from "../pages/mine";
import UnauthenticatedApp from "../pages/unauthenticated-app";

const router = [
    {
        path:'/login',
        element:<UnauthenticatedApp/>,

    },
    {
        path:'/',
        element:<Home/>,

    },
    {
        path:'/learnWorld',
        element: <LearnWorld/>
    },
    {
        path:'/reStudy',
        element: <ReStudy/>
    },
    {
        path:'/mine',
        element: <Mine/>
    }

]

export default router;