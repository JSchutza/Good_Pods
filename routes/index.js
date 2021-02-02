var express = require('express');
var router = express.Router();
const { User } = require("../db/models")
const { csrf, csrfProtection, bcrypt, check, validationResult, asyncHandler } = require("../lib/util")

const loginValidators = [
  check('email')
    .exists({ checkFalsy: true })
    .withMessage('Please enter your email.'),
  check('password')
    .exists({ checkFalsy: true })
    .withMessage('You forgot to enter your password!')
];

const signUpValidator = [
  check('email')
    .exists({ checkFalsy: true })
    .withMessage('Please provide an email address.')
    .isLength({ max: 255 })
    .withMessage('Whoaaa that\'s a long email! Try again.')
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
  check('name')
    .exists({ checkFalsy: true })
    .withMessage('Please enter your name.')
    .isLength({ max: 70 })
    .withMessage('Your name is too long!'),
  check('password')
    .exists({ checkFalsy: true })
    .withMessage('Please enter a password.'),
  check('confirmPassword')
    .custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error('Password confirmation does not match password');
      }
      return true;
    })
    .withMessage('Password confimation does not match password')
];


router.get('/', csrfProtection, (req, res) => {
  res.render('index', { csrfToken: req.csrfToken(), title: 'Welcome to Podemic!' })
});

router.post('/', signUpValidator, csrfProtection, asyncHandler(async (req, res) => {
  const { email, name, password, confirmPassword } = req.body;
  const validatorErrors = validationResult(req);
  if (validatorErrors.isEmpty()) {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ email, name, hashedPassword });
    req.session.user = user;

    return req.session.save(() => {
      res.render('profile');
    })
  }
  else {
    const errors = validatorErrors.array().map((error) => error.msg)
    res.render('create-user', { email, name, errors, csrfToken: req.csrfToken() })
  }
}))



router.get("/login", csrfProtection, (req, res) => {
  res.render("login", { csrfToken: req.csrfToken() })
})

router.post("/login", csrfProtection, loginValidators, asyncHandler(async (req, res) => {
  const { email, password } = req.body
  const user = await User.findOne({ where: { email } })
  req.session.user = user;
  const RealPassword = user.hashedPassword.toString()

  const passwordMatch = await bcrypt.compare(password, RealPassword)
  const validatorErrors = validationResult(req);
  const errors = validatorErrors.array().map((error) => error.msg);
  if (passwordMatch && validatorErrors.isEmpty()) {
    return req.session.save(() => {
      res.render("profile")
    })
  } else {
    res.render('login', { errors, csrfToken: req.csrfToken(), email })
  }
}))

/* GET home page. */
// router.get('/', function (req, res, next) {
//   res.render('index', { title: 'Welcome to Podemic!' });
// });



module.exports = router;
