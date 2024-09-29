let initialState = {
    topics:[]
}

const TopicReducer = (state=initialState,action)=>{
    switch(action.type){
        case "GET_TOPICS":
            
            // state = action.data
            return {
                ...state,
                topics: action.data
            }
        
    }
    return state
}

export default TopicReducer