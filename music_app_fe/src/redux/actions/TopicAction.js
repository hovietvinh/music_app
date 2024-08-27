import { getTopicsApi } from "../../utils/api";
import { notification } from 'antd';
export const getTopicsAction = ()=>{
    return async(dispatch)=>{
        try {
            const data = await getTopicsApi()
      
            if(data.code==200){
                
                dispatch({
                    type:"GET_TOPICS",
                    data:data.data
                })
            }
            else{
                notification.error({
                    message:"Truy cập dữ liệu thất bại",
                    description: data.message
                })
            }
            
        } catch (error) {
            notification.error({
                message:"Truy cập dữ liệu thất bại",
                description: error.message
            })
        }
    }
}