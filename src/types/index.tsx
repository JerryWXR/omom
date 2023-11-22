export interface Response<T> {
    message:string,
    data:T,
    code:string
}
export interface LoginInfo{
    username:string,
    password:string,
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