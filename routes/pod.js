const express = require('express');
const apiKey = process.env.LISTEN_API_KEY
const unirest = require('unirest');
const router = express.Router();
const { User, Podcast, Genre, Podshelf, Review, Shelf } = require('../db/models');
const { csrf, csrfProtection, bcrypt, check, validationResult, asyncHandler } = require("../lib/util")

router.get('/:id', csrfProtection, asyncHandler(async (req, res) => {
    const podcast = await unirest.get(`https://listen-api.listennotes.com/api/v2/podcasts/${req.params.id}79?next_episode_pub_date=1479154463000&sort=recent_first`)
      .header('X-ListenAPI-Key', apiKey)
    podcast = await podcast.toJSON();
    
    const otherPodcasts = await unirest.get('https://listen-api.listennotes.com/api/v2/podcasts/25212ac3c53240a880dd5032e547047b/recommendations?safe_mode=0')
    .header('X-ListenAPI-Key', apiKey)
    otherPodcasts =await otherPodcasts.toJSON()
    otherPodcasts = otherPodcasts.recommendations
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









module.exports = router;