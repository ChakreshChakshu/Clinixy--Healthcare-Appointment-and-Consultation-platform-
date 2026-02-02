import mongoose from "mongoose";

const slotSchema = new mongoose.Schema({
  startTime: String,
  endTime: String,
  isBooked: {
    type: Boolean,
    default: false
  }
});

const availabilitySchema = new mongoose.Schema(
  {
    doctorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Doctor",
      required: true
    },

    date: {
      type: Date,
      required: true
    },

    slots: [slotSchema]
  },
  { timestamps: true }
);

export default mongoose.model("Availability", availabilitySchema);
