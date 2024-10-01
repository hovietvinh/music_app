import { Express } from "express";
import { songRoutes } from "./song.route";
import { topicRoutes } from "./topic.route";
import { userRoutes } from "./user.route";
import { favoriteSongRoutes } from "./favorite-song.route";
import { searchRoutes } from "./search.route";

const clientRoutes = (app:Express):void=>{
    app.use("/api/topics",topicRoutes);
    app.use("/api/songs",songRoutes)
    app.use("/api/users",userRoutes)
    app.use("/api/favorite-songs",favoriteSongRoutes)
    app.use("/api/search",searchRoutes)
};

export default clientRoutes;