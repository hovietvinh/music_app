import { Express } from "express";
import { songRoutes } from "./song.route";
import { topicRoutes } from "./topic.route";

const clientRoutes = (app:Express):void=>{
    app.use("/api/topics",topicRoutes);
    app.use("/api/songs",songRoutes)
};

export default clientRoutes;