import mongoose from "mongoose";

const clinicSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },

    address: {
      city: String,
      state: String,
      pincode: String
    },

    timings: [
      {
        day: {
          type: String,
          enum: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          required: true
        },
        open: { type: String, default: "09:00 AM" },
        close: { type: String, default: "05:00 PM" },
        isClosed: { type: Boolean, default: false }
      }
    ],

    isActive: {
      type: Boolean,
      default: true
    }
  },
  { timestamps: true }
);

export default mongoose.model("Clinic", clinicSchema);
