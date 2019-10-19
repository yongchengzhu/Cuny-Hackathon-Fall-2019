const express = require('express');
const router  = express.Router();

router.get('/', (req, res) => {
  // get info specific for user
});

router.post('/signin', (req, res) => {
  // sign in user
});

router.post('/signup', (req, res) => {
  // Sign up user
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