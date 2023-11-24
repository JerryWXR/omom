import React, {Component, FC, useEffect, useState} from 'react';
import {getLoginStatus} from "../../services";
import {LoginInfo} from "../../types";

export const useAuth = () => {
const [loginInfo,setLoginInfo]=useState({isLogin:false} as LoginInfo)
    // 监听接口返回的登录状态
    // useEffect(() => {
    //     getLoginStatus().then((res:LoginInfo) => {
    //         console.log(res)
    //         // 设置登录状态
    //         setLoginInfo(res)
    //     })
    // },[])
    // 返回新的登录状态
    console.log(loginInfo)
    return {loginInfo}

};

// 传入所有需要判断的组件
export const withAuth = (Component:FC<any>)=>() => {
    const {loginInfo} = useAuth()
    console.log(loginInfo)
    if (!Object.keys(loginInfo).length) {
        return <></>;
    }
    // 如果为登录状态，则返回传入的组件
    if(loginInfo.isLogin){
        return <Component/>
    }

    console.log('333')
    // 否则回到登录页
    // const returnUrl: string = window.location.href;
    window.location.replace(`/login`)
    return <></>
}
