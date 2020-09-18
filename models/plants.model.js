const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const plantsSchema = new Schema(
  {
    name: { type: String, required: true },
    type: { type: String, required: true },
    status: { type: String, required: true },
    // datePlanted: { type: Date, required: true },
    lastWatered: { type: Date, required: false },
    lastFed: { type: Date, required: false },
    lastWateredPH: { type: Number, required: false },
  },
  { timestamps: true }
);

const Plant = mongoose.model("Plant", plantsSchema);

module.exports = Plant;
