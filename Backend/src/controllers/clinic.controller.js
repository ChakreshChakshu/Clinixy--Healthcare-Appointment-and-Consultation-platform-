import ClinicService from "../services/clinic.service.js";

export const registerClinic = async (req, res) =>{

    try {
        
    const {name, address, timings} = req.body;   

    const createdClinic = await ClinicService.clinicService({name, address, timings});

    return res.status(201).json({"clinic created successfully": createdClinic});
    } catch (error) {
        return res.status(400).json({"clinic creation failed": error.message});
    }

}