import express from 'express';
import { getAllClinicID, registerDoctor } from '../controllers/doctor.controller.js';
import { validateDoctor } from '../validators/docktor.validation.js';
import { IsAuth } from '../middlewares/auth.middleware.js';
import { authorizeRoles } from '../middlewares/role.middleware.js';
const doctorRouter = express.Router();
doctorRouter.post('/doctorRegister',validateDoctor, registerDoctor);
doctorRouter.get('/clinic/:clinicId',IsAuth,authorizeRoles("DOCTOR") ,getAllClinicID);

export default doctorRouter;