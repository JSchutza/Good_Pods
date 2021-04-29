const express = require('express');
const apiKey = process.env.LISTEN_API_KEY
const baseUrl = 'https://listen-api-test.listennotes.com/api/v2'
const unirest = require('unirest');
const router = express.Router();
const { User, Podcast, Genre, Podshelf, Review, Shelf } = require('../db/models');
const { csrf, csrfProtection, bcrypt, check, validationResult, asyncHandler } = require("../lib/util")

router.get('/:id', csrfProtection, asyncHandler(async (req, res) => {
    let podcast = await unirest.get(`${baseUrl}/podcasts/${req.params.id}?next_episode_pub_date=1479154463000&sort=recent_first`)
      .header('X-ListenAPI-Key', apiKey)
    podcast = await podcast.toJSON();
    podcast = podcast.body
    
    let otherPodcasts = await unirest.get(`${baseUrl}/podcasts/25212ac3c53240a880dd5032e547047b/recommendations?safe_mode=0`)
    .header('X-ListenAPI-Key', apiKey)
    otherPodcasts =await otherPodcasts.toJSON()
    otherPodcasts = otherPodcasts.body.recommendations
    const userId = req.session.auth.userId;
    
    res.render('podcast', { podcast, otherPodcasts, userId, csrfToken: req.csrfToken() });
}))


router.post('/:id', csrfProtection, asyncHandler(async (req, res) => {
    
    const { star, reviewText } = req.body;
    const userId = req.session.auth.userId;
    const podcastId = req.params.id;
    const rating = star;
    await Review.create({ userId, podcastId, rating, reviewText });
    res.redirect(`/podcasts/${podcastId}`);
}))


// router.get('/:id/episodes', csrfProtection, asyncHandler(async (req, res) => {
//   let episodes = await unirest.get(`${baseUrl}/episodes/${req.params.id}?show_transcript=1`)
//   .header('X-ListenAPI-Key', apiKey)
//   let podcast = await unirest.get(`${baseUrl}/podcasts/${req.params.id}?next_episode_pub_date=1479154463000&sort=recent_first`)
//       .header('X-ListenAPI-Key', apiKey)
//     podcast = await podcast.toJSON();
//     podcast = podcast.body
//     episodes = await episodes.toJSON()
//     episodes = episodes.body
//     console.log(episodes, 'episodes from api request')
//   res.render('episodes', {episodes, podcast})
// })








module.exports = router;