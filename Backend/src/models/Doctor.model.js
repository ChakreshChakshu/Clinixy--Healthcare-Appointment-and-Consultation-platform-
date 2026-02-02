import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },

    email: { type: String, required: true, unique: true },

    password: { type: String, required: true },

    specialization: [{ type: String }],

    experienceYears: Number,

    clinicId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Clinic"
    },

    isVerified: {
      type: Boolean,
      default: false
    }
  },
  { timestamps: true }
);

export default mongoose.model("Doctor", doctorSchema);
