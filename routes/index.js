const express = require('express');
const router = express.Router();
const { User } = require("../db/models")
const { csrf, csrfProtection, bcrypt, check, validationResult, asyncHandler, createShelves } = require("../lib/util")
const { loginUser, logoutUser } = require("../auth")

// for the home page
router.get('/', csrfProtection, (req, res) => {
  res.render('index', { csrfToken: req.csrfToken() })
});


// for the pod feed page
// need to also bring in the users info from db?
router.get('/feed', (req, res) => {
  res.render('feed')
});




module.exports = router;
