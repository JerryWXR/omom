
import {loginAtom,store} from "./atoms";
import {RESPONSE_STATUS} from "../contants";

export const fetcher = async(url:string,options?:Object) => {
    const response = await fetch(url,{...options,credentials:'include'});
    if(!response.ok){
        throw new Error('Request failed');
    }
    const data = await response.json()
    if(data.code===RESPONSE_STATUS.TOKEN_ERROR) {
        store.set(loginAtom,{visibleLogin:true});
    }
    return data
};
export const post = async (url:string,data?:object,options?:any)=>{
    return await fetcher(url,{
        method:'POST',
            headers:{
            'Content-Type':'application/json',
        },
        body:JSON.stringify(data),
            ...options
    })
}