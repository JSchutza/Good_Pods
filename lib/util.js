const csrf = require('csurf');
const csrfProtection = csrf({ cookie: true });
const bcrypt = require('bcryptjs');
const { check, validationResult } = require('express-validator')
const {Shelf, User} = require("../db/models")

const asyncHandler = (handler) => {
  return (req, res, next) => {
    handler(req, res, next).catch(next);
  }
}

async function createShelves (user) {
  const types = ['Current', 'Thumbs Up', 'On My Radar', 'Meh', 'Thumbs Down'];
  types.forEach( async (type) => {
    await Shelf.create({type, userId: user.id})
  })
}



module.exports = { csrf, csrfProtection, bcrypt, check, validationResult, asyncHandler, createShelves}