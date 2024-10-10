import DefaultAdmin from "../admin/layouts/Default";
import TopicAdmin from "../admin/pages/Topics";
import CreateTopic from "../admin/pages/Topics/create";
import Default from "../client/layouts/Default";
import FavoriteSongs from "../client/pages/favorite-songs";
import Login from "../client/pages/login";
import Search from "../client/pages/search";
import Songs from "../client/pages/songs";
import DetailSong from "../client/pages/songs/detail";
import Topics from "../client/pages/topics";
import LoginAdmin from "../admin/pages/Login/index"
import { Navigate } from "react-router-dom";
import SongsAdmin from "../admin/pages/Songs/index"
import CreateSong from "../admin/pages/Songs/create";
import SongDetail from "../admin/pages/Songs/detail";
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
    },
    {
        path:"/admin",
        element: <DefaultAdmin/>,
        children:[
            {
                index:true,
                element: <Navigate to={"/admin/dashboard"}/>
                
            },
            {
                path:"dashboard",
                element:<>123</>
                
            },
            {
                path:"topics",
                element:<TopicAdmin/>
            },
            {
                path:"topics/create",
                element:<CreateTopic/>
            }
            ,{
                path:"songs",
                element:<SongsAdmin/>
            },
            {
                path:"songs/create",
                element:<CreateSong/>
            },
            {
                path:"songs/detail/:id",
                element:<SongDetail/>
            }
        ]

    },
    {
        path:"/admin/accounts/login",
        element:<LoginAdmin/>

    }

];
