import DoctorModel from "../models/Doctor.model.js";
import PasswordUtils from "../utils/password.js";
import ClinicModel from "../models/Clinic.model.js";
import UserModel from "../models/User.model.js";

const doctorService = async (name, email, password, specialization, clinicId, education, discription,experienceYears) => {

    const chackDoctor = await DoctorModel.findOne({ email: email });
    if (chackDoctor) {
        throw new Error("Doctor already exists");
    }
    const hashedPassword = await PasswordUtils.hashPassword(password);
    const doctor = await DoctorModel.create({
        name,
        email,
        password: hashedPassword,
        specialization,
        clinicId,
        education,
        discription,
        experienceYears
    });
     const user = await UserModel.create({
          name,
          email,
          password:hashedPassword,
          role: "DOCTOR"
        });

    return doctor;
}

const getClinicIDservice = async (id) => {
    const clinic = await ClinicModel.findById(id);
    if (!clinic) {
        throw new Error("No clinic found for this clinicId");
    }   
    return clinic;
}

const DoctorService = {
    doctorService,
    getClinicIDservice
}
export default DoctorService;




