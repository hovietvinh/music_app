import { Router } from "express";
import * as controller from  "../../controllers/client/favorite-song.controller"
import * as  middlewares from  "../../middlewares/client/song.middleware"

// import * as  middlewares from  "../../middlewares/client/song.middleware"
const router:Router = Router();


router.get("/",middlewares.checkUser,controller.index)

// router.get("")

export const favoriteSongRoutes:Router = router;