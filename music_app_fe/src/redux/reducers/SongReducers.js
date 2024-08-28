
const initialState ={
    songs:[],
    topic:""
}
const SongReducer = (state=initialState,action)=>{
    switch(action.type){
        case "GET_SONGS_IN_TOPIC":
          
            state.songs = action.data
            state.topic = action.topic
            // state = action.data
            return {...state}
        
    }
    return state
}

export default SongReducer