const express       = require('express');
const router        = express.Router();

const middlewares = require('../middlewares');
const models      = require('../models');
const User        = models.User;
const CarbonEntry = models.CarbonEntry;

router.get('/', (req, res) => {
  // get info specific for user
});

router.post('/signin', middlewares.requireLogin, (req, res) => {
  // sign in user
  res.send({ token: middlewares.tokenForUser(req.user) });
});

router.post('/signup', (req, res) => {
  // Sign up user
  const email = req.body.email;
  const password = req.body.password;
  const mobile = req.body.mobile;
  const milesPerGallonDefault = req.body.milesPerGallonDefault;
  const total = req.body.total; // We want to calculate this later.
  const category = req.body.category;
  const fuelType = req.body.fuelType;
  const milesPerGallon = req.body.milesPerGallon;
  const footprint = req.body.footprint;

  User.findOne({ email: email }, (err, existingUser) => {
    if (err) return next(err);
    if (existingUser) return res.status(422).send({ error: 'Email is in use!' });

    const newCarbonEntry = new CarbonEntry({
      category: category,
      fuelType: fuelType,
      milesPerGallon: milesPerGallon,
      footprint: footprint
    });

    const newUser = new User({
      email                : email,
      password             : password,
      mobile               : mobile,
      milesPerGallonDefault: milesPerGallonDefault,
      carbonLog : {
        total: total,
        history: [newCarbonEntry]
      }
    });

    newUser.save(err => {
      if (err) return next(err);
      res.json({ token: middlewares.tokenForUser(newUser) });
    });
  });
});

router.put('/update', (req, res) => {
  // update user info
});

router.post('/carbonLog/create', (req, res) => {
  // Create carbon log entry
});

router.delete('/update/carbonlog/:id', (req, res) => {
  // delete carbon log entry
});

router.put('/update/carbonlog/:id', (req, res) => {
  // update carbon log entry
});

module.exports = router;