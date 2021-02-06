const express = require('express');
const { get } = require('.');
const router = express.Router();
const { User, Podcast, Genre, Podshelf, Review, Shelf } = require('../db/models');
const { csrf, csrfProtection, bcrypt, check, validationResult, asyncHandler } = require("../lib/util")

router.get('/:id', csrfProtection, asyncHandler(async (req, res) => {
    const podcast = await Podcast.findByPk(req.params.id, {
        include: Genre
    });
    const otherPodcasts = await Genre.findByPk(podcast.genreId, {
        include: Podcast,
        limit: 5
    })
    const userId = req.session.auth.userId;
    // const otherPods = otherPodcasts.Podcasts;
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