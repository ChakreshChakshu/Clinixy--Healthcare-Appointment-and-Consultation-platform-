import express from "express"
import { Login, register } from "../controllers/auth.controller.js"
import { validate } from "../middlewares/validate.middleware.js"
import { loginValidation, validateRegister } from "../validators/auth.validation.js"
import { authorizeRoles } from "../middlewares/role.middleware.js"
import { IsAuth } from "../middlewares/auth.middleware.js"


export const authRouter=express.Router()

authRouter.post("/login",validate(loginValidation),Login)
authRouter.post('/register',validate(validateRegister), register);


