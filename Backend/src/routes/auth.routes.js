import express from "express"
import { Login } from "../controllers/auth.controller.js"
import { validate } from "../middlewares/validate.middleware.js"
import { loginValidation } from "../validators/auth.validation.js"


export const authRouter=express.Router()

authRouter.post("/login",validate(loginValidation),Login)