import { notification } from 'antd';
import { checkUserApi, loginUserApi } from "../../utils/api"




// import { registerUserApi } from '../../utils/api';
// export const registerUsersAction = (data)=>{
//     return async(dispatch)=>{
//         try {
//             const res = await registerUserApi(data)
//             if(res.code==200){
//                 dispatch({
//                     type:"REGISTER_USER",
//                     // data:res.data
//                 })
//                 notification.success({
//                     message:"Đăng ký tài khoảng thành công"
//                 })
//             }
//             else{
//                 notification.error({
//                     message:"Đăng ký tài khoản không thành công",
//                     // description: res.message
//                 })
//             }
            
//         } catch (error) {
//             notification.error({
//                 message:"Lỗi ở Action",
//                 // description: error.message
//             })
//         }
//     }
// }

export const loginUserAction = (data)=>{
    return async(dispatch)=>{
        try {
            const res = await loginUserApi(data)
            // console.log(res);
            if(res.code==200){
                // console.log(res);
                dispatch({
                    type:"LOGIN_USER",
                    user_token:res.user_token,
                    userInfo:res.userInfo
                })
                notification.success({
                    message:"Đăng nhập thành công"
                })
                return res;
            }
            else{
                // console.log(400);
                notification.error({
                    message:res.message
                })
                return null
            }
            
        } catch (error) {
            // console.log(error);
            notification.error({
                message:"Lỗi ở Action",
               
            })
            return null;
        }
    }
}



export const checkUserAction = (code)=>{
    return async(dispatch)=>{
        try {
            const res = await checkUserApi(code)
            // console.log(res);
            if(res.code==200){
                // console.log(200);
                dispatch({
                    type:"CHECK_USER",
                    user_token:res.user_token,
                    userInfo:res.userInfo
                })
                
                return true;
            }
            else{
                // console.log(400);

                dispatch({
                    type:"CHECK_USER_FAILED",
                    
                })
                
                return false
            }
            
        } catch (error) {
            // console.log(error);
            notification.error({
                message:"Lỗi ở Action",
               
            })
            return false;
        }
    }
}

export const logoutUserAction  = ()=>{
    return {
        type:"LOGOUT_USER"
    }
}