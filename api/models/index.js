const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});

mongoose.set('useFindAndModify', false);

mongoose.connection.once('open', () => {
  console.log('Mongodb installed succesfully');
});

module.exports = mongoose;