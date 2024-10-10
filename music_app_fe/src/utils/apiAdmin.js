import PurePanel from "antd/es/tooltip/PurePanel"
import axios from "./axios.customize"

const getTopicsAdminApi = async()=>{
    try {
        const URL_LOGIN ='/api/admin/topics'
       
        const response = await axios.get(URL_LOGIN)
        return response
    } catch (error) {
        return {
            code:400,
            message:"Truy cập database API thất bại "
        }
    }
}

const accountCheckApi = async(data)=>{
    try {
        const URL_LOGIN ='/api/admin/accounts/check'
       
        const response = await axios.post(URL_LOGIN,data,{
            headers:{
                "Content-Type":"application/json"
            }
        })
        return response
    } catch (error) {
        return {
            code:400,
            message:"Truy cập database API thất bại "
        }
    }
}

const accountLoginApi = async(data)=>{
    try {
        const URL_LOGIN ='/api/admin/accounts/login'
       
        const response = await axios.post(URL_LOGIN,data,{
            headers:{
                "Content-Type":"application/json"
            }
        })
        return response
    } catch (error) {
        return {
            code:400,
            message:"Truy cập database API thất bại "
        }
    }
}

const getSongsApi = async()=>{
    try {
        const URL_LOGIN ='/api/admin/songs'
       
        const response = await axios.get(URL_LOGIN)
        return response
    } catch (error) {
        return {
            code:400,
            message:"Truy cập database API thất bại "
        }
    }
    
}
const createSongsApi = async(data)=>{
    try {
        const URL_LOGIN ='/api/admin/songs/create'
       
        const response = await axios.post(URL_LOGIN,data);
        return response
    } catch (error) {
        return {
            code:400,
            message:"Truy cập database API thất bại "
        }
    }
}

const getDataCreateSongApi = async()=>{
    try {
        const URL_LOGIN ='/api/admin/songs/create'
       
        const response = await axios.get(URL_LOGIN)
        return response
    } catch (error) {
        return {
            code:400,
            message:"Truy cập database API thất bại "
        }
    }
    
}

const getSongByIdApi = async(id)=>{
    try {
        const URL_LOGIN =`/api/admin/songs/detail/${id}`
       
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
    getTopicsAdminApi,
    accountCheckApi,
    accountLoginApi,
    getSongsApi,
    getDataCreateSongApi,
    createSongsApi,
    getSongByIdApi

}