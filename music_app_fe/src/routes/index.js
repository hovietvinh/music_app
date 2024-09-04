import Default from "../client/layouts/Default";
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
            }
        ]
    }
];
