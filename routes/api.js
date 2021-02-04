const express = require('express');
const router = express.Router();
// bring in the podcasts model here:
const { Podcast, Genre, Shelf, Review } = require("../db/models")
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

// api for the genres
router.get('/genres', asyncHandler(async(req, res)=>{
    const genres = await Genre.findAll()

    res.json(genres)
}))

router.get('/podcasts/:id(\\d+)', asyncHandler(async(req, res)=>{
    const id = req.params.id;
    const podcast = await Podcast.findByPk(id)

    res.json(podcast)
}))

router.get('/reviews/:id(\\d+)', asyncHandler(async(req,res)=>{
    const id = req.params.id;
    const reviews = await Review.findAll({ where:{
        podcastId: id
    }})
    res.json(reviews)
}))




module.exports = router;
