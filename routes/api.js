const express = require('express');
const router = express.Router();
// bring in the podcasts model here:


const { Podcast, Genre, Shelf, Review, PodShelf, User } = require("../db/models")
const { asyncHandler } = require("../lib/util")
const { logoutUser } = require("../auth")


// api for the pod feed page
router.get('/podcasts', asyncHandler(async (req, res) => {
    const all_podcasts = await Podcast.findAll({
        include: [{ model: Genre }],
    });

    res.json(all_podcasts);
}));




// api for the users shelf
router.get('/shelves', asyncHandler(async (req, res) => {
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
    const podcastId = req.body.podcastId;
    await PodShelf.create({shelfId, podcastId})

    const addedPodcast = await Podcast.findByPk(podcastId);
    const the_shelf = await Shelf.findByPk(shelfId);

    const message = {
        message: `${addedPodcast.name} was added to your ${the_shelf.type} shelf.`,
    }


    res.json(message);
}));




router.delete('/shelves/:shelf_id(\\d+)/podcasts/:podcast_id(\\d+)', asyncHandler(async (req, res) => {
    const shelf_id = req.params.shelf_id;
    const podcast_id = req.params.podcast_id;

    await PodShelf.destroy({
        where: { shelfId: shelf_id, podcastId: podcast_id }
    });

    const removedPodcast = await Podcast.findByPk(podcast_id);
    const the_shelf = await Shelf.findByPk(shelf_id);

    const message = {
        message: `${removedPodcast.name} was removed from your ${the_shelf.type} shelf.`,
    }


    res.json(message);

}));






// router.get("/podcasts/:id/reviews", asyncHandler(async (req, res)=> {
//     const reviews = await Review.findAll({where: {
//         podcastId: req.params.id
//     }});
//     res.json(reviews)
// }))




// api for the genres
router.get('/genres', asyncHandler(async (req, res) => {
    const genres = await Genre.findAll()

    res.json(genres)
}));



// api to grab specific podcast
router.get('/podcasts/:id(\\d+)', asyncHandler(async (req, res) => {
    const id = req.params.id;
    let podcast = await Podcast.findByPk(id)
    const reviews = await Review.findAll({
        where: { podcastId: id }
    })
    let final = {}
    const scores = []
    let total = 0
    let average
    reviews.forEach(review => {
        scores.push(review.rating)
    });
    scores.forEach(score => {
        total += score
    })
    average = total / reviews.length
    final.podcast = podcast
    final.averageScore = average
    res.json(final)
}));



// api for reviews by podcast ID
router.get('/podcasts/:id(\\d+)/reviews', asyncHandler(async (req, res) => {
    const id = req.params.id;
    const reviews = await Review.findAll({
        where: {
            podcastId: id
        },
        include: [User]
    })

    const result = [];
    reviews.forEach(review => {
        let each = {
            "name": review.User.name,
            "userId": review.User.id,
            "id": review.id,
            "podcastId": review.podcastId,
            "rating": review.rating,
            "reviewText": review.reviewText,
            // "userId": review.userId
        }

        result.push(each)
    });


    res.json(result)
}));



// api to delete a single review
router.delete('/podcasts/:podcastId(\\d+)/reviews/:reviewId(\\d+)', asyncHandler(async (req, res) => {
    const id = req.params.reviewId;

    const review = await Review.findByPk(id);
    await review.destroy();
    res.json(review)
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



                    // NEED TO FIX
router.delete('/users/:user_id(\\d+)', asyncHandler(async (req, res) => {
    const their_id = req.params.user_id;
    const user_id = req.session.auth.userId;


    console.log(user_id);
    // only destroy the user if their session id is the same as the passed in parameter in the api
    // if(user_id === their_id) {
    await User.destroy({
        where: { id: user_id}
    });


        // must call logout
        // logoutUser(req, res);

        // redirect them to the homepage
        res.json({message: ""});
    // }



    // res.end();

}));




module.exports = router;
