const express = require('express');
const router = express.Router();
// bring in the podcasts model here:

const { Podcast, Genre, Shelf, Review, PodShelf} = require("../db/models")
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

    const users_shelf = await Shelf.findAll({
        where: { userId: user_id },
        include: { model: Podcast }
    });

    let result = {}

    let current_shelf = users_shelf[0]
    let thumbs_up = users_shelf[1]
    let radar = users_shelf[2]
    let meh = users_shelf[3]
    let thumbs_down = users_shelf[4]

    result.current_shelf = current_shelf;
    result.thumbs_up = thumbs_up;
    result.radar = radar;
    result.meh = meh;
    result.thumbs_down = thumbs_down;

    res.json(result);
}));

router.post("/shelves", asyncHandler (async (req, res) => {
    const shelfId = req.session.auth.userShelves[req.body.shelfType]
    console.log(shelfId)
    const podcastId = req.body.podcastId;
    console.log(podcastId)
    await PodShelf.create({shelfId, podcastId})
    res.json({"this is a response":"just Checking"})
})
)
// router.get("/podcasts/:id/reviews", asyncHandler(async (req, res)=> {
//     const reviews = await Review.findAll({where: {
//         podcastId: req.params.id
//     }});
//     res.json(reviews)
// }))






// api for the genres
router.get('/genres', asyncHandler(async(req, res)=>{
    const genres = await Genre.findAll()

    res.json(genres)
}))
// api to grab specific podcast
router.get('/podcasts/:id(\\d+)', asyncHandler(async(req, res)=>{
    const id = req.params.id;
    const podcast = await Podcast.findByPk(id)

    res.json(podcast)
}))
// api for reviews by podcast ID
router.get('/reviews/:id(\\d+)', asyncHandler(async(req,res)=>{
    const id = req.params.id;
    const reviews = await Review.findAll({ where:{
        podcastId: id
    }})
    res.json(reviews)
}))




// api to grab all podshevles by user
// router.get('/podshelves', asyncHandler(async(req,res)=>{
//     const user_id = req.session.auth.userId;
//     console.log(user_id)
//     const shelves = await PodShelf.findAll({ where: {
//         shelfId : 1
//     }});
//     res.json(shelves)
// }))



module.exports = router;
