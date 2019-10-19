const mongoose = require('mongoose');

const carbonEntrySchema = new mongoose.Schema({
  category: String,
  dateUsed: { type: Date, default: Date.now() },
  fuelType: String,
  milesPerGallon: Number,
  footprint: Number // grams of CO2
});

module.exports = carbonEntrySchema;