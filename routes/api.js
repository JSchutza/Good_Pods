const express = require('express');
const router = express.Router();
// bring in the podcasts model here:
const { Podcast, Genre, Shelf, Review, Podshelf} = require("../db/models")
const { asyncHandler } = require("../lib/util")



// api for the pod feed page
router.get('/podcasts', asyncHandler(async(req, res) => {
    const all_podcasts = await Podcast.findAll({
        include: [{ model: Genre }],
    });

    res.json(all_podcasts);
}));


// api for the users shelf
router.get('/shelves', asyncHandler(async(req, res) => {
    const user_id = req.session.auth.userId;

    const users_shelf = await Shelf.findAll({ where: {
        userId: user_id
    }});

    res.json(users_shelf);
}));

router.get("/reviews", asyncHandler(async (req, res)=> {
    const reviews = await Review.findAll();
    res.json(reviews)
}))


module.exports = router;
