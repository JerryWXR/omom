import {LoginInfo, Response, World} from "../types";
import {post} from "../utils/request";


const API_BASE_URL= '192.168.xxx.xxx'
export interface loginParams{
    username:string,
    password:string
}
export const login = (params:loginParams):Promise<Response<string>> => {
    return post (`${API_BASE_URL}/login`,params)
}
export const getLoginStatus = ():Promise<LoginInfo>=> {
    return post(`${API_BASE_URL}/getLoginStatus`)
}
// 获取当前单词
export const getCurrentWorld = ():Promise<World>=>{
    return post(`${API_BASE_URL}/getCurrentWorld`)
}
