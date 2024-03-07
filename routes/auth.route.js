const express = require('express');
const {SignIn, SignOut} = require('../middleware/auth.js');
const router = express.Router();

router.post('/signin', SignIn);
router.post('/signout', SignOut);

module.exports = router