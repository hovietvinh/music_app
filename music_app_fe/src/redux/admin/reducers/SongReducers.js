const initialState = {
    songs: [],
};

const SongReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_SONGS_ADMIN":
            return {
                ...state,
                songs: action.data
            };
        default:
            return state;
        
    }
};

export default SongReducer;
