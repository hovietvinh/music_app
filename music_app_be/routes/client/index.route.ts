import { Express } from "express";
import { songRoutes } from "./song.route";
import { topicRoutes } from "./topic.route";
import { userRoutes } from "./user.route";

const clientRoutes = (app:Express):void=>{
    app.use("/api/topics",topicRoutes);
    app.use("/api/songs",songRoutes)
    app.use("/api/users",userRoutes)
};

export default clientRoutes;