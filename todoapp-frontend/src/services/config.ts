import axios from "axios"
import * as SecureStore from 'expo-secure-store'

export const BASE_URL = "http://192.168.1.5:1337/"
const TIME_OUT = 30000
export const TODO_APP = "todo_user_token"

const axiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: TIME_OUT
})

export const saveToken = async(key: string, value: string)=>{
    try {
        await SecureStore.setItemAsync(key, value)
    } catch (error) {
        console.log("Error in savetoken", error);
        throw error
    }
}

axiosInstance.interceptors.request.use(async (req)=>{
    try{
        const access_token = await SecureStore.getItemAsync(TODO_APP)
        req.headers.Authorization = access_token
        return req
    }
    catch(error){
        return req
    }
})

export const fetcher = (url:string)=>
    axiosInstance.get(url).then((res)=>res.data)
    
export default axiosInstance