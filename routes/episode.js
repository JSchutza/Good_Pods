const express = require('express');
const apiKey = process.env.LISTEN_API_KEY
const baseUrl = 'https://listen-api-test.listennotes.com/api/v2'
const unirest = require('unirest');
const router = express.Router();
const { Client } = require('podcast-api');
const { csrf, csrfProtection, bcrypt, check, validationResult, asyncHandler } = require("../lib/util")

router.get('/:id', csrfProtection, asyncHandler(async (req, res) => {
   const id = req.pararams.id;
   const client = Client({ apiKey: null });
   let epObj = {}
client.fetchEpisodeById({
  id: id,
  show_transcript: 1,
}).then((response) => {
  // Get response json data here
  epObj.episode = response.data
}).catch((error) => {
  console.log(error)
});
  // let episodeData = await unirest.get(`${baseUrl}/${id}?show_transcript=1`)
  // .header('X-ListenAPI-Key', apiKey)
  // if (episodeData.ok) {
  //   episodeData = await episodeData.toJSON();
  //   const episode = episodeData.body;
  let episode = epObj.episode
    res.render('episode', {episode})
  // }
}))



module.exports = router;