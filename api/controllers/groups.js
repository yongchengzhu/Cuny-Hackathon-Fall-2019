const express = require('express');
const router  = express.Router();
const Group = require('../models').Group;
const User = require('../models').User;
const middlewares = require('../middlewares');

emailExists = async (email) => {
  try{
      users = await User.find({email});
      return users.length > 0;
  } catch(err) {
      return false;
  }
}

router.get('/:id', middlewares.requireToken, async (req, res, next) => {
  // get info specific for group
  try{
    const group = await Group.findById(req.params.id);
    return res.json(group);
  } catch (err) {
      res.status(404).json({err: err.toString()});
  }
});


router.post('/', middlewares.requireToken, async (req, res) => {
  // Create group
  newGroup = new Group({
    name: req.body.name,
    users: [req.user.email]
  });
  newGroup = await newGroup.save();
  res.json(newGroup);
});

router.put('/:id/user/', async (req, res) => {
  // insert user into group by email
  try{
    emailIsFound = await emailExists(req.body.email);
    if(!emailIsFound){
      return res.status(404).json({err: "Email not found!"});
    }
    const group = await Group.findById(req.params.id);
    if(group.users.filter(email => email === req.body.email).length === 0){
      group.users.push(req.body.email);
      await group.save();
      return res.json(group);
    }
    res.status(400).json({err: "Email already exists in group!!"});
  } catch (err) {
    res.status(404).json({err: "Group id not found"});
  }
});

router.delete('/:id/user/', async (req, res) => {
  // delete user in group by email
  try{
    emailIsFound = await emailExists(req.body.email);
    if(!emailIsFound){
      return res.status(404).json({err: "Email not found!"});
    }
    const group = await Group.findById(req.params.id);
    group.users = group.users.filter(email => email != req.body.email)
    await group.save();
    return res.json(group);
  } catch (err) {
    res.status(404).json({err: "Group id not found"});
  }
});

router.delete('/:id', async (req, res) => {
  try{
    remGroup = await Group.findByIdAndRemove(req.params.id);
    res.json(remGroup);
  } catch (err) {
    res.sendStatus(404);
  }
});


module.exports = router;