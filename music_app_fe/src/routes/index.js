import Default from "../client/layouts/Default";
import FavoriteSongs from "../client/pages/favorite-songs";
import Login from "../client/pages/login";
import Search from "../client/pages/search";
import Songs from "../client/pages/songs";
import DetailSong from "../client/pages/songs/detail";
import Topics from "../client/pages/topics";

export const routes = [
    {
        path:"/",
        element:<Default/>,
        children:[
            {
                path:"/topics",
                element:<Topics/>
            },
            {
                path:"/songs/:slugTopic",
                element:<Songs/>
            },
            {
                path:"/songs/detail/:slugSong",
                element:<DetailSong/>
            },
            {
                path:"/favorite-songs",
                element:<FavoriteSongs/>
            },
            {
                path:"/search/result",
                element:<Search/>
            }
        ]
    },
    {
        path:"/user/login",
        element:<Login/>
    }
];
