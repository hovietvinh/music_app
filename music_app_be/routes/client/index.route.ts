import { Express } from "express";
import { topicRoutes } from "./topic.route";

const clientRoutes = (app:Express):void=>{
    app.use("/api/topics",topicRoutes);
};

export default clientRoutes;