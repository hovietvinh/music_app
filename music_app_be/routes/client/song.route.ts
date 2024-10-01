import { Router } from "express";
import * as controller from  "../../controllers/client/song.controller"
import * as  middlewares from  "../../middlewares/client/song.middleware"
const router:Router = Router();


router.get("/:slugTopic",controller.list)
router.get("/detail/:slugSong",controller.detail)
router.patch("/listen/:idSong",controller.listen)
// router.get("/favorite/get",middlewares.checkUser,controller.getFavorite)
router.patch("/like/:typeLike/:idSong",middlewares.checkUser,controller.like)
router.patch("/favorite/:typeFavorite/:idSong",middlewares.checkUser,controller.favorite)
// router.get("")

export const songRoutes:Router = router;