import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },

    email: { type: String, required: true, unique: true },

    password: { type: String, required: true },

    specialization: [{ type: String }],

    experienceYears: Number,

    clinicId: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Clinic"
    }],

    education: { type: String, required: true },
    discription: { type: String, required: true },
    role: {
      type: String,
      default: "DOCTOR"
    },

    isVerified: {
      type: Boolean,
      default: true
    }
  },
  { timestamps: true }
);

export default mongoose.model("Doctor", doctorSchema);
