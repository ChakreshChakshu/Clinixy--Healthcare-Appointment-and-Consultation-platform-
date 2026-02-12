import express from 'express';
import { getAllClinicID, registerDoctor } from '../controllers/doctor.controller.js';
import { validateDoctor } from '../validators/docktor.validation.js';
const doctorRouter = express.Router();
doctorRouter.post('/doctorRegister', validateDoctor, registerDoctor);
doctorRouter.get('/clinic/:clinicId', getAllClinicID);

export default doctorRouter;