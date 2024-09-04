
import { notification } from 'antd';
import { getSongsInTopicApi, getSongDetailApi } from '../../utils/api';
export const getSongsInTopicAction = (slugTopic)=>{
    return async(dispatch)=>{
        try {
            const data = await getSongsInTopicApi(slugTopic);
      
            if(data.code==200){
              
                dispatch({
                    type:"GET_SONGS_IN_TOPIC",
                    data:data.data,
                    topic:data.topic
                })
            }
            else{
                
                notification.error({
                    message:"Truy cập dữ liệu thất bại action",
                    description: data.message
                })
            }
        } catch (error) {
            notification.error({
                message:"Truy cập dữ liệu thất bại error action",
                description: error.message
            })
        }
    }
}

export const getSongDetailAction = (slugSong)=>{
    return async(dispatch)=>{
        try {
            const data = await getSongDetailApi(slugSong);

      
            if(data.code==200){
              
                dispatch({
                    type:"GET_SONG_DETAIL",
                    data:data.data,
                })
            }
            else{
                
                notification.error({
                    message:"Truy cập dữ liệu thất bại action",
                    description: data.message
                })
            }

        } catch (error) {
            notification.error({
                message:"Truy cập dữ liệu thất bại error action",
                description: error.message
            })
        }
    }
}