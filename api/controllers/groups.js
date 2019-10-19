const express = require('express');
const router  = express.Router();

router.get('/:id', (req, res) => {
  // get info specific for group
});


router.post('/', (req, res) => {
    // Create group
});

router.put('/user/:email', (req, res) => {
    // insert user into group by email
});

router.delete('/user/:email', (req, res) => {
    // delete user in group by email
});

router.delete('/:id', (req, res) => {
    // delete group
});


module.exports = router;