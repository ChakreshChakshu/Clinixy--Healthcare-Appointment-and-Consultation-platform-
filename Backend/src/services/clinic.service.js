import ClinicModel from "../models/Clinic.model.js";

export const clinicService = async (clinicData) => {
  const { name, address, timings = [] } = clinicData;
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

  if (!name || !address) {
    throw new Error("Name and address are required");
  }

  const cleanName = name.trim();

  if (cleanName.length < 3) {
    throw new Error("Name must be at least 3 characters");
  }

  if (!address.city || !address.state || !address.pincode) {
    throw new Error("Address must include city, state and pincode");
  }

  const nameExists = await ClinicModel.findOne({ name: cleanName });

  if (nameExists) {
    throw new Error("Clinic with this name already exists");
  }

  const finalTimings = days.map(d => ({
    day: d,
    open: "9:00 AM",
    close: "5:00 PM",
    isClosed: d === "Sunday", 
    ...timings.find(t => t.day === d)
  }))

  const clinic = await ClinicModel.create({
    name: cleanName,
    address,
    timings: finalTimings
  });

  return clinic;
};

const ClinicService = {
  clinicService,
};

export default ClinicService;
