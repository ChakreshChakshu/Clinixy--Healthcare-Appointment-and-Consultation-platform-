import express from 'express';
import { register } from '../controllers/auth.controller.js';
import { validateRegister } from '../validators/auth.validation.js';
import validate from '../middlewares/validate.middleware.js';

const AuthRouter = express.Router();
AuthRouter.post('/register', validateRegister, validate, register);

export default AuthRouter;