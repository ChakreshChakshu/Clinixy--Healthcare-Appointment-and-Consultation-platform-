import express from "express"
import { Login, register } from "../controllers/auth.controller.js"
import { validate } from "../middlewares/validate.middleware.js"
import { loginValidation, validateRegister } from "../validators/auth.validation.js"


export const authRouter=express.Router()

authRouter.post("/login",validate(loginValidation),Login)
authRouter.post('/register', validate(validateRegister), register);


