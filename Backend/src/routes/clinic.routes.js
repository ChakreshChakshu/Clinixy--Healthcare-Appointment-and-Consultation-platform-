import express from 'express';

import { registerClinic } from '../controllers/clinic.controller.js';
import { authorizeRoles } from '../middlewares/role.middleware.js';
import { IsAuth } from '../middlewares/auth.middleware.js';

const clinicRouter = express.Router();
clinicRouter.post('/clinicRegister',IsAuth,authorizeRoles("DOCTOR") ,registerClinic);

export default clinicRouter;