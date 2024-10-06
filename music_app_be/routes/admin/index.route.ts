import { Express } from "express";

import {topicRoutes} from "./topic.route"
import {accountRoutes} from "./account.route"
import {songRoutes} from "./song.route"

const adminRoutes = (app:Express):void=>{
    app.use("/api/admin/topics",topicRoutes);
    app.use("/api/admin/accounts",accountRoutes);
    app.use("/api/admin/songs",songRoutes);
   
};

export default adminRoutes;