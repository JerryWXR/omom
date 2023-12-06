import {AllClass, AudibleClassDetail, AudiblePart, Banner, LoginInfo, NewClass, Response, World} from "../types";
import {get, post} from "../utils/request";


const API_BASE_URL= 'http://api.omoms.top'
export interface loginParams{
    username:string,
    password:string
}
export interface registerParams{
    username:string,
    password:string,
    phone:string,
    verifyCode:string
}
export interface allClassParams{
    pageNum:number,
    pageSize:number,
}
export interface addClickParams{
    id:number
}

// 登录
export const login = (params:loginParams):Promise<Response<string>> => {
    return post (`${API_BASE_URL}/auth/login`,params)
}
// 注册
export const register = (params:registerParams):Promise<Response<string>> => {
    return post (`${API_BASE_URL}/auth/register`,params)
}
// 获取当前登录状态
export const getLoginStatus = ():Promise<Response<LoginInfo>> => {
    return get(`${API_BASE_URL}/auth/login/status`)
}
// 获取当前单词
export const getCurrentWorld = ():Promise<World>=>{
    return post(`${API_BASE_URL}/getCurrentWorld`)
}
// 获取有声课堂banner图
export const getAudibleBanner = ():Promise<Response<Array<Banner>>> => {
    return get(`${API_BASE_URL}/index/banner/list`)
}
//获取有声课堂最新课程
export const getAudibleClassNew = ():Promise<Response<Array<NewClass>>> => {
    return get(`${API_BASE_URL}/index/course/list/newest`)
}
//全部视频
export const getAudibleClassAll = (params:allClassParams):Promise<Response<Array<AllClass>>> => {
    return get(`${API_BASE_URL}/index/course/list/all?pageNum=${params.pageNum}&pageSize=${params.pageSize}`)
}
// 点击课程点击量加1
export const addClickClass = (courseId:number):Promise<Response<void>> => {
    return post(`${API_BASE_URL}/index/course/count/add`, {courseId})
}
//获取课程详情
export const getClassDetail = (courseId:number):Promise<Response<AudibleClassDetail>> => {
    return get(`${API_BASE_URL}/course/intro?courseId=${courseId}`)
}
export const getClassPart = (courseId:number):Promise<Response<Array<AudiblePart>>> => {
    return get(`${API_BASE_URL}/course/part/list?courseId=${courseId}`)
}