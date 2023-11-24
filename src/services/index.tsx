import {LoginInfo, Response, World} from "../types";
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
export const login = (params:loginParams):Promise<Response<string>> => {
    return post (`${API_BASE_URL}/auth/login`,params)
}
export const register = (params:registerParams):Promise<Response<string>> => {
    return post (`${API_BASE_URL}/auth/register`,params)
}
export const getLoginStatus = ():Promise<Response<LoginInfo>> => {
    return get(`${API_BASE_URL}/auth/login/status`)
}
// 获取当前单词
export const getCurrentWorld = ():Promise<World>=>{
    return post(`${API_BASE_URL}/getCurrentWorld`)
}
