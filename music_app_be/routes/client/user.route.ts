import { Router } from "express";
import * as controller from  "../../controllers/client/user.controller"
import * as validate from "../../validates/client/user.validate"

const router:Router = Router();


router.post("/register",validate.register,controller.register)
router.post("/login",validate.login,controller.login)
router.post("/checkUser/:code",controller.checkUser)

export const userRoutes:Router = router;