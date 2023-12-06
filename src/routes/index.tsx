import React from 'react';
import Home from "../pages/home";
import LearnWord from "../pages/learnWord";
import ReStudy from "../pages/reStudy"
import Mine from "../pages/mine";
import UnauthenticatedApp from "../pages/unauthenticated-app";
import Audible from "../pages/audibleClass";
import VideoDetails from "../pages/audibleClass/videoDetails";
import IELTS from "../pages/ielts";
import ClassDetail from "../pages/ielts/detail";
import CollegeEnglish from "../pages/collegeEnglish";

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
    // 视频播放
    {
        path:'/videoDetails/:itemId',
        element: <VideoDetails/>
    },
    // 有声课堂
    {
        path:'/audible',
        element: <Audible/>,
    },
    // 雅思
    {
        path:'/ielts',
        element: <IELTS/>,
    },
    {
        path:'/ieltsDetail',
        element: <ClassDetail/>
    },
    // 背单词
    {
        path:'/learnWord',
        element: <LearnWord/>
    },
    // 大学应试英语
    {
        path:'/collegeEnglish',
        element: <CollegeEnglish />
    },

    {
        path:'/reStudy',
        element: <ReStudy/>
    },
    // 我的
    {
        path:'/mine',
        element: <Mine/>
    }

]

export default router;