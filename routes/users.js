const express = require('express');
const router = express.Router();
const { User } = require('../db/models');
const { csrf, csrfProtection, bcrypt, check, validationResult, asyncHandler} = require("../lib/util")
const formValidator = [
  check('email')
    .custom(async email => {
      await User.findOne({
        where: {
          email: email
        }
      }).then(isEmail => {
        if (isEmail) {
          return Promise.reject('Email is already in use');
        }
      })
    })
    .withMessage('Email is already in use')
    .isEmail()
    .withMessage('Email must be valid'),
  check('confirmPassword')
    .custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error('Password confirmation does not match password');
      }
      return true;
    })
    .withMessage('Password confimation does not match password')
];



/* GET users listing. */
router.get('/', csrfProtection, (req, res, next) => {
  res.render('create-user', { csrfToken: req.csrfToken() })
});

router.post('/', formValidator, csrfProtection, asyncHandler(async (req, res) => {
  const { email, name, password, confirmPassword } = req.body;
  const validatorErrors = validationResult(req);
  if (validatorErrors.isEmpty()) {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ email, name, hashedPassword });
    req.session.user=user;

    return req.session.save(() => {
      res.render('profile');
    })
   
    
  }
  else {
    const errors = validatorErrors.array().map((error) => error.msg)
    res.render('create-user', { email, name, errors, csrfToken: req.csrfToken() })
  }
}))

module.exports = router;
