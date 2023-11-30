import React from 'react';
import Home from "../pages/home";
import LearnWord from "../pages/learnWord";
import ReStudy from "../pages/reStudy"
import Mine from "../pages/mine";
import UnauthenticatedApp from "../pages/unauthenticated-app";
import Audible from "../pages/audibleClass";
import VideoDetails from "../pages/videoDetails";

const router = [
    // {
    //     path:'/login',
    //     element:<UnauthenticatedApp/>,
    //
    // },
    {
        path:'/',
        element:<Home/>,

    },
    {
        path:'/videoDetails',
        element: <VideoDetails/>
    },
    {
        path:'/audible',
        element: <Audible/>,
    },
    {
        path:'/learnWord',
        element: <LearnWord/>
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