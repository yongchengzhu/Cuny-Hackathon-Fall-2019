const mongoose = require('mongoose');
const bcrypt   = require('bcrypt-nodejs');
const carbonEntrySchema = require('./carbonEntrySchema');

const userSchema = new mongoose.Schema({
  fullname: String,
  email: { type: String, unique: true, lowercase: true },
  password: String,
  mobile: String,
  milesPerGallonDefault: Number,
  carbonLog: {
    total: Number,
    history: [carbonEntrySchema]
  }
});

// Hash password before saving it into database.
userSchema.pre('save', function(next) {
  const user = this;
  bcrypt.genSalt(10, function(err, salt) {
    if (err) return next(err);
    bcrypt.hash(user.password, salt, null, function(err, hash) {
        if (err) return next(err);
        user.password = hash;
        next();
    });
  });
});

// Method to validate password.
userSchema.methods.comparePassword = function(candidatePassword, callback) {
  bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
    if (err) { return callback(err); }
    callback(null, isMatch);
  });
}

module.exports = userSchema;