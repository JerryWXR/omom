export interface Response<T> {
    message:string,
    data:T,
    retCode:string
}
export interface LoginInfo{
    isLogin:boolean
}
export interface World{
    index:number,
    world:string,
    mean:string,
    speech:string,
    type:string,
    zhSentence:string ,
    enSentence:string
}