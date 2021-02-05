const express = require('express');
const { get } = require('.');
const router = express.Router();
const { User, Podcast, Genre, Podshelf, Review, Shelf } = require('../db/models');
const { csrf, csrfProtection, bcrypt, check, validationResult, asyncHandler } = require("../lib/util")

router.get('/:id', asyncHandler(async (req, res) => {
    const podcast = await Podcast.findByPk(req.params.id, {
        include: Genre
    });
    const otherPodcasts = await Genre.findByPk(podcast.genreId, {
        include: Podcast,
        limit: 5
    })
    // const otherPods = otherPodcasts.Podcasts;
    res.render('podcast', { podcast, otherPodcasts });
}))


module.exports = router;