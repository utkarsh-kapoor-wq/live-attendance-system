import {Router} from "express"
import { loginHandler  , signupHandler , logoutHandler} from "../controllers/auth.controller.js"
const router = Router();


router.post("/login",loginHandler);
router.post("/signup",signupHandler);
router.post("/logout",logoutHandler);


export default router ; 
