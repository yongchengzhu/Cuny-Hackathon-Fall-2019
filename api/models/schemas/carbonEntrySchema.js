const mongoose = require('mongoose');

const carbonEntrySchema = new mongoose.Schema({
  category: String,
  date: { type: Date, default: Date.now() },
  fuelType: String,
  milesPerGallon: Number,
  value: Number // grams of CO2
});

module.exports = carbonEntrySchema;