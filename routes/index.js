var express = require('express');
var router = express.Router();
const { User } = require("../db/models")
const { csrf, csrfProtection, bcrypt, check, validationResult, asyncHandler, createShelves } = require("../lib/util")
const { loginUser, logoutUser } = require("../auth")

router.get('/', csrfProtection, (req, res) => {
  res.render('index', { csrfToken: req.csrfToken(), title: 'Welcome to Podemic!' })
});



module.exports = router;
