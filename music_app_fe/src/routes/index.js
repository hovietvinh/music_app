import Default from "../client/layouts/Default";
import Topics from "../client/pages/topics";

export const routes = [
    {
        path:"/",
        element:<Default/>,
        children:[
            {
                path:"/",
                element:<Topics/>
            }
        ]
    }
];
