import express from 'express';

import { registerClinic } from '../controllers/clinic.controller.js';

const clinicRouter = express.Router();
clinicRouter.post('/clinicRegister', registerClinic);

export default clinicRouter;