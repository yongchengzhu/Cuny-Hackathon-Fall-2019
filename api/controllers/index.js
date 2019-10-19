const express = require('express');
const router  = express.Router();

const usersController = require('./users.js');
const groupsController = require('./groups.js');

router.use('/users', usersController);
router.use('/groups', groupsController);

module.exports = router;