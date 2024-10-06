import { Router } from "express";
import * as controller from  "../../controllers/admin/account.controller"
import * as validate from  "../../validates/admin/account.validate"

const router:Router = Router();


router.post("/create",controller.create)
router.post("/check",controller.check)
router.post("/login",validate.login,controller.login)

export const accountRoutes:Router = router;