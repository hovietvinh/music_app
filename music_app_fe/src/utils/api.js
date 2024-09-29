import axios from "./axios.customize"

const getTopicsApi = async()=>{
    try {
        const URL_LOGIN ='/api/topics'
       
        const response = await axios.get(URL_LOGIN)
        return response
    } catch (error) {
        return {
            code:400,
            message:"Truy cập database API thất bại "
        }
    }
}

const getSongsInTopicApi = async(slugTopic)=>{
    try {
        const URL_LOGIN =`/api/songs/${slugTopic}`
        
        const response = await axios.get(URL_LOGIN)
       
        return response
        
        
    } catch (error) {
        return {
            code:400,
            message:"Truy cập database API thất bại "
        }
    }
}

const getSongDetailApi = async(slugSong)=>{
    try {
        const URL_LOGIN =`/api/songs/detail/${slugSong}`
        
        const response = await axios.get(URL_LOGIN)
       
        return response
    } catch (error) {
        return {
            code:400,
            message:"Truy cập database API thất bại "
        }
    }
}

const registerUserApi = async(data)=>{
    try {
        const URL_LOGIN =`/api/users/register`
        
        const response = await axios.post(URL_LOGIN,data,{
            headers:{
                "Content-Type":"application/json"
            }
        })
       
        return response
    } catch (error) {
        return {
            code:400,
            message:"Thật bại ở axios"
        }
    }
}

const loginUserApi = async(data)=>{
    try {
        const URL_LOGIN =`/api/users/login`
        
        const response = await axios.post(URL_LOGIN,data,{
            headers:{
                "Content-Type":"application/json"
            }
        })
        return response
    } catch (error) {
        return {
            code:400,
            message:"Thật bại ở axios"
        }
    }
}
const checkUserApi = async(code)=>{
    try {
        const URL_LOGIN =`/api/users/checkUser/${code}`
        
        const response = await axios.post(URL_LOGIN)
        return response
    } catch (error) {
        return {
            code:400,
            message:"Thật bại ở axios"
        }
    }
}

const songLikeApi = async(typeLike,idSong)=>{
    try {
        const URL_LOGIN =`/api/songs/like/${typeLike}/${idSong}`
        
        const response = await axios.get(URL_LOGIN)
        return response
    } catch (error) {
        return {
            code:400,
            message:"Thật bại ở axios"
        }
    }
}

export {
    getTopicsApi,
    getSongsInTopicApi,
    getSongDetailApi,
    registerUserApi,
    loginUserApi,
    checkUserApi,
    songLikeApi
}