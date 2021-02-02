const csrf = require('csurf');
const csrfProtection = csrf({ cookie: true });
const bcrypt = require('bcryptjs');
const { check, validationResult } = require('express-validator')

const asyncHandler = (handler) => {
  return (req, res, next) => {
    handler(req, res, next).catch(next);
  }
}

module.exports = { csrf, csrfProtection, bcrypt, check, validationResult, asyncHandler}