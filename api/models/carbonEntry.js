const mongoose = require('mongoose');
const carbonEntrySchema = require('./schemas').carbonEntrySchema;

const CarbonEntry = mongoose.model('CarbonEntry', carbonEntrySchema);

module.exports = CarbonEntry;