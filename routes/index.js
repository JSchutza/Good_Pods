const express = require('express');
const unirest = require("unirest")
const router = express.Router();
const { User, Podcast, Genre } = require("../db/models")
const { csrf, csrfProtection, bcrypt, check, validationResult, asyncHandler, createShelves } = require("../lib/util")
const { loginUser, logoutUser } = require("../auth")
const apiKey = process.env.LISTEN_API_KEY
const baseUrl = 'https://listen-api.listennotes.com/api/v2'
// for the home page
router.get('/', csrfProtection, (req, res) => {
  
  res.render('index', { csrfToken: req.csrfToken() })
});


// for the pod feed page
// need to also bring in the users info from db?
 router.get('/feed', asyncHandler( async (req, res) => {
  
    let genresList = await unirest.get(`${baseUrl}/genres?top_level_only=1`).header('X-ListenAPI-Key',apiKey)
    genresList = await genresList.toJSON()
    let genreobjlist = await genresList.body.genres
    const genres = [];
   
    for (let i = 0; i< genreobjlist.length; i++){
      let genreId = genreobjlist[i].id
      let podcasts = await unirest.get(`${baseUrl}/best_podcasts?${genreId}&page=2&region=us&safe_mode=0`).header('X-ListenAPI-Key',apiKey)
      genres.push(podcasts)
    }

  
    res.render('feed', {genres})
    
  }





module.exports = router;
