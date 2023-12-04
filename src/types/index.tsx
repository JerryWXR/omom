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
export interface Banner{
    id:number,
    bannerSort:number,
    bannerUrl:string
}

export interface NewClass{
    categoryName:string
    clickCount: number
    cover: string
    description: string
    id: number
    nickname: string
    title: string
}
export interface AllClass{
    avatar:string
    clickCount: number
    description: string
    id: number
    nickname: string
    title: string
}