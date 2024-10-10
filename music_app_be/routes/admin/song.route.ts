import { Router } from "express";
import * as controller from  "../../controllers/admin/song.controller"
import * as uploadCloud from "../../middlewares/admin/uploadCloud.middleware"
import multer from "multer"
// import * as  middlewares from  "../../middlewares/client/song.middleware"
const router:Router = Router();
const upload = multer()


router.get("/",controller.index)
router.get("/create",controller.create)
router.get("/detail/:id",controller.getDetail)
router.post("/create",upload.fields([
    {name:"avatar",maxCount:1},
    {name:"audio",maxCount:1},
]),uploadCloud.uploadFields,controller.createPost)

// router.get("")

export const songRoutes:Router = router;