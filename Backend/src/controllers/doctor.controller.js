import DoctorService from "../services/doctor.service.js";

export const registerDoctor = async (req, res) => {
    try {
        const { name, email, password, specialization, clinicId, education, discription, experienceYears } = req.body;
          

        const newDoctor = await DoctorService.doctorService(name, email, password, specialization, clinicId, education, discription, experienceYears);
        return res.status(201).json({"Doctor registered successfully": newDoctor});
    } catch (error) {
        return res.status(400).json({"Doctor registration failed": error.message});
    }
}

export const getAllClinicID = async (req, res) => {
    try {
        const { clinicId } = req.params;
        const clinic = await DoctorService.getClinicIDservice(clinicId);
        return res.status(200).json({"Clinic found": clinic});
    } catch (error) {
        res.status(404).json({"Clinic not found": error.message});
    }
}
