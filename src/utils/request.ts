import {TokenInfo} from "../contants";
import {Response} from "../types";

export const get = async (url: string, options?: Object) => {
    const response = await fetch(url, {
        ...options,
        headers: {
            'Authorization': sessionStorage.getItem(TokenInfo.AUTHORIZATION) || '',
        },
    });
    if (!response.ok) {
        throw new Error('Request failed');
    }
    return await response.json()
};
export const post = async (url: string, data?: object, options?: any) => {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Authorization': sessionStorage.getItem(TokenInfo.AUTHORIZATION),
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        ...options
    })

    if (!response.ok) {
        throw new Error('Request failed');
    }
    return await response.json()
}