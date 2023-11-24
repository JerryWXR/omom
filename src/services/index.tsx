import {LoginInfo, Response, World} from "../types";
import {fetcher, post} from "../utils/request";


const API_BASE_URL= 'http://api-omom.ruruzi.com'
export interface loginParams{
    username:string,
    password:string
}
export const login = (params:loginParams):Promise<Response<string>> => {
    return post (`${API_BASE_URL}/user/login`,params)
}
export const getLoginStatus = ():Promise<LoginInfo>=> {
    return fetcher(`${API_BASE_URL}/user/login/status`)
}
// 获取当前单词
export const getCurrentWorld = ():Promise<World>=>{
    return post(`${API_BASE_URL}/getCurrentWorld`)
}
