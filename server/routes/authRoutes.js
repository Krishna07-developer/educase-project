import express from "express"
import { loginController, registerController,signout } from "../controllers/authController.js"
import { verifyToken } from "../utils/verifyUser.js"

const router = express.Router()

router.post('/sign-up',registerController)
router.post('/login',loginController)
router.get('/signout',signout)


export default router