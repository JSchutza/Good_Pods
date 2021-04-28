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
  const userShelves = {};
  types.forEach( async (type) => {
    const newShelf = await Shelf.create({name:type, userId: user.id})
    userShelves[newShelf.type]= newShelf.id
  })
  return userShelves
}

async function populateShelves(user) {
  const userShelves = {}
  const shelfObjs = await Shelf.findAll({where: {userId: user.id}})
  shelfObjs.forEach(shelf => {
    
    userShelves[shelf.type]=shelf.id
  })
  return userShelves
}


module.exports = { csrf, csrfProtection, bcrypt, check, validationResult, asyncHandler, createShelves, populateShelves}