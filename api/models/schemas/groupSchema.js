const mongoose = require('mongoose');

const groupSchema = new mongoose.Schema({
  name: String,
  users: [{ type: String, ref: 'User' }]
});

module.exports = groupSchema;