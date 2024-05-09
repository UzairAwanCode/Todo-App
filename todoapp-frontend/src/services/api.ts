import axiosInstance, { TODO_APP, saveToken } from "./config";

type RegisterUserTypes = IUser

export const registerUser = async ({ email, name, password }: RegisterUserTypes) => {
    try {
        const response = await axiosInstance.post("/users/create", { name, email, password })
        return response.data.user
    } catch (error) {
        console.log("Error in registerUser", error);
        throw error
    }
}

type LoginUserType = Omit<IUser,"name">
export const loginUser = async ({email, password}: LoginUserType)=>{
    try {
        const response = await axiosInstance.post("/users/login", {email, password})
        const _token = response.data.token
        axiosInstance.defaults.headers.common["Authorization"]=_token
        saveToken(TODO_APP, _token)
        return response.data.user
    } catch (error) {
        console.log("Error in Login User", error);
        throw error
    }
}