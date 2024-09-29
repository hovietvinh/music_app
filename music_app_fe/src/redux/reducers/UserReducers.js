const initialState = {
    userInfo:{},
    user_token:""
}

const UserReducer = (state=[],action)=>{
    switch(action.type){
        case "LOGIN_USER":
            // console.log(action);
            return {
                ...state,
                userInfo:action.userInfo,
                user_token:action.user_token
            }


        
        case "CHECK_USER":
            return {
                ...state,
                userInfo:action.userInfo,
                user_token:action.user_token
            }
        case "CHECK_USER_FAILED":
            return {
                ...state,
                userInfo:{},
                user_token:""
            }
        case "LOGOUT_USER":
            return {
                ...state,
                userInfo:{},
                user_token:""
            }
        
    }
    return state
}

export default UserReducer