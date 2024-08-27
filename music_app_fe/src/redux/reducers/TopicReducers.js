const TopicReducer = (state=[],action)=>{
    switch(action.type){
        case "GET_TOPICS":
            state = action.data
            // state = action.data
            return state
        
    }
    return state
}

export default TopicReducer