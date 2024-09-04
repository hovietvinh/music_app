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

export {
    getTopicsApi,
    getSongsInTopicApi,
    getSongDetailApi
}