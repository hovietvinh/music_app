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

export {
    getTopicsApi
}