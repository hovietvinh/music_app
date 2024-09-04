const initialState = {
    songs: [],
    topic: ""
};

const SongReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_SONGS_IN_TOPIC":
            return {
                ...state,
                songs: action.data,
                topic: action.topic
            };
        case "GET_SONG_DETAIL":
            return {
                ...state,
                songs: [action.data],
                topic: action.data.infoTopic.title
            };
        default:
            return state;
    }
};

export default SongReducer;
