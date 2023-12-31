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

// 有声课堂最新
export interface NewClass{
    categoryName:string
    clickCount: number
    cover: string
    description: string
    id: number
    nickname: string
    title: string
}
// 有声课堂全部
export interface AllClass{
    avatar:string
    clickCount: number
    description: string
    id: number
    nickname: string
    title: string
}
// 有声课堂详情
export interface AudibleClassDetail{
    description: string
    title: string
    tutorAvatar: string
    tutorName: string
    tutorTitle: string
    courseCol:CourseCol
    subsCount:number
}
interface CourseCol{
    courseCollectionList:[
        {
            courseId: number
            courseTitle: string
            cover:string
        }
    ]
    courseCollectionTitle:string
}
export interface AudiblePart{
    courseId: number
    id: string
    partDescription: string
    partSort: number
    partTitle: string
    partUrl: string,
    isTry:number,
}
// 订阅课程
export interface Subscribe{
    courseId: number
}
// 检查订阅
export interface CheckSubscribe{
    isSubs: boolean
}