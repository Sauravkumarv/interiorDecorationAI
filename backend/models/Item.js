const { default: mongoose } = require("mongoose");

const itemSchema = new mongoose.Schema({
  itemName: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    maxlength: 1000,
  },
  dimensions: {
    type: String, // Keep as String to match frontend input "180 x 80 x 75"
    required: true,
    trim: true,
  },
  color: {
    type: String,
    required: true,
    trim: true,
  },
  furnitureImage: {
    type: String,
    required: true,
  },
  roomImage: {
    type: String,
    required: false,
  },
  submittedAt: {
    type: Date,
    default: Date.now,
  },
  submittedBy: {
    type: String,
    default: "anonymous"
  },
});

module.exports = mongoose.model("Item", itemSchema);