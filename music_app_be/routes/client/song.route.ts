import { Router } from "express";
import * as controller from  "../../controllers/client/song.controller"
import * as  middlewares from  "../../middlewares/client/song.middleware"
const router:Router = Router();


router.get("/:slugTopic",controller.list)
router.get("/detail/:slugSong",controller.detail)
router.get("/like/:typeLike/:idSong",middlewares.checkUser,controller.like)
// router.get("")

export const songRoutes:Router = router;