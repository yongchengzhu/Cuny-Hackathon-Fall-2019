const express       = require('express');
const router        = express.Router();

const middlewares = require('../middlewares');
const models      = require('../models');
const User        = models.User;
const CarbonEntry = models.CarbonEntry;

router.get('/welcome', (req, res) => {
  res.json({ msg: 'Welcome!' });
});

router.get('/', middlewares.requireToken, (req, res) => {
  res.json(req.user);
});

router.post('/signin', middlewares.requireLogin, (req, res) => {
  res.send({ token: middlewares.tokenForUser(req.user) });
});

router.post('/signup', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const mobile = req.body.mobile;
  const milesPerGallonDefault = req.body.milesPerGallon;

  User.findOne({ email: email }, (err, existingUser) => {
    if (err) return next(err);
    if (existingUser) return res.status(422).send({ error: 'Email is in use!' });

    const newUser = new User({
      email                : email,
      password             : password,
      mobile               : mobile,
      milesPerGallonDefault: milesPerGallonDefault,
      carbonLog : {
        total: 0,
        history: []
      }
    });

    newUser.save(err => {
      if (err) return next(err);
      res.json({ token: middlewares.tokenForUser(newUser) });
    });
  });
});

router.put('/update', middlewares.requireToken, (req, res, next) => {
  const update = { ...req.user._doc, ...req.body };
  User.findOneAndUpdate({ _id: req.user.id }, update, (err, updatedUser) => {
    if (err) next(err);
    res.send({ success: true });
  })
});

router.post('/carbonLog/create', middlewares.requireToken, (req, res, done) => {
  const category = req.body.category;
  const fuelType = req.body.fuelType;
  const milesPerGallon = req.body.milesPerGallon;
  const distance = req.body.distance;
  const footprint = distance / milesPerGallon * 8.887;

  const newCarbonEntry = new CarbonEntry({
    category: category,
    fuelType: fuelType,
    milesPerGallon: milesPerGallon,
    footprint: footprint
  });

  const newCarbonLog = {
    total: req.user.carbonLog.total + footprint,
    history: [...req.user._doc.carbonLog.history, newCarbonEntry]
  };

  const userUpdate = { ...req.user._doc, carbonLog: newCarbonLog };

  User.findOneAndUpdate({ _id: req.user.id }, userUpdate, (err, updatedUser) => {
    if (err) done(err);
    res.json({ success: true });
  })
});

router.delete('/carbonlog/:id', middlewares.requireToken, (req, res, next) => {
  let deletedTotal = 0;
  
  const newCarbonEntry = req.user.carbonLog.history.filter(e => {
    if (e._id == req.params.id) deletedTotal = e.footprint;
    return e._id != req.params.id
  });
  
  const newCarbonLog = { total: req.user.carbonLog.total - deletedTotal, history: newCarbonEntry };
  const userUpdate = { ...req.user._doc, carbonLog: newCarbonLog };

  User.findOneAndUpdate({ _id: req.user._id }, userUpdate, (err, updatedUser) => {
    if (err) next(err);
    res.json({ success: true });
  })
});

router.put('/carbonLog/:id', middlewares.requireToken, (req, res, next) => {
  let diff = 0;
  const newCarbonEntry = req.user.carbonLog.history;
  
  for (let key in newCarbonEntry) {
    if (newCarbonEntry[key]['_id'] == req.params.id) {
      diff = newCarbonEntry[key]['footprint'] - (req.body.distance / req.body.milesPerGallon * 8.887);
      newCarbonEntry[key] = {
        category: req.body.category,
        fuelType: req.body.fuelType,
        milesPerGallon: req.body.milesPerGallon,
        footprint: req.body.distance / req.body.milesPerGallon * 8.887
      };
    }
  }

  const newTotal = req.user.carbonLog.total - diff;

  const newCarbonLog = { ...req.user._doc.carbonLog, total: newTotal, history: newCarbonEntry };
  const userUpdate = { ...req.user._doc, carbonLog: newCarbonLog };

  User.findOneAndUpdate({ _id: req.user.id }, userUpdate, (err, updatedUser) => {
    if (err) next(err);
    res.json({ success: true });
  })
});

module.exports = router;