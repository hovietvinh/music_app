import Default from "../client/layouts/Default";
import Songs from "../client/pages/songs";
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
            }
        ]
    }
];
