const express = require('express');
const router = express.Router();
// bring in the podcasts model here:


const { Podcast, Genre, Shelf, Review, PodShelf, User } = require("../db/models")
const { asyncHandler } = require("../lib/util")
const { logoutUser } = require("../auth");
const { apiKey } = require('../config');
const unirest = require("unirest")

// api for the pod feed page
// I don't know if this code was ever needed but its certainly not needed now
// router.get('/podcasts', asyncHandler(async (req, res) => {
//     const all_podcasts = await Podcast.findAll({
//         include: [{ model: Genre }],
//     });

//     res.json(all_podcasts);
// }));




// api for the users shelf
router.get('/shelves', asyncHandler(async (req, res) => {
    const user_id = req.session.auth.userId;

    const users_shelf = await Shelf.findAll({
        where: { userId: user_id }
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
    for ( shelf of result) {
        for(podcast of shelf.podcasts){
            let pod = await await unirest.get('https://listen-api.listennotes.com/api/v2/podcasts/4d3fe717742d4963a85562e9f84d8c79?next_episode_pub_date=1479154463000&sort=recent_first')
            .header('X-ListenAPI-Key', apiKey)
            pod = await pod.toJSON()
            // let podObj = {name: pod.title, podImage: pod.thumbnail, id: pod.id}
            let podObj = {name: pod.body.title, podImage: pod.body.thumbnail, id: pod.body.id}
            podcast.info = podObj
        }
    }

    res.json(result);
}));




router.post("/shelves", asyncHandler (async (req, res) => {
    const shelfId = req.session.auth.userShelves[req.body.ShelfType]
    const podcastId = req.body.podcastId;
    let updatedShelf = await Shelf.findByPk(shelfId)
    let oldpods = updatedShelf.podcasts
    oldpods.push(podcastId)
    updatedShelf.update({
        podcasts: oldpods
      })
    const addedPodcast = req.body.podcastName
    const the_shelf = req.body.ShelfType

    const message = {
        message: `${addedPodcast} was added to your ${the_shelf} shelf.`
    }


    res.json(message);
}));




router.delete('/shelves/:shelf_id(\\d+)/podcasts/:podcast_id(\\d+)', asyncHandler(async (req, res) => {
    const shelf_id = req.params.shelf_id;
    const podcast_id = req.params.podcast_id;
    let updatedShelf = await Shelf.findByPk(shelf_id)
    let oldpods = updatedShelf.podcasts
    oldpods.splice(oldpods.indexOf(podcast_id),1)
    updatedShelf.update({
        podcasts: oldpods
      })
    // await PodShelf.destroy({
    //     where: { shelfId: shelf_id, podcastId: podcast_id }
    // });

    
    const message = {
        message: `Podcast was removed from your ${updatedShelf.name} shelf.`,
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
    const response = await unirest.get('https://listen-api.listennotes.com/api/v2/genres?top_level_only=1')
  .header('X-ListenAPI-Key', apiKey)
    let genres = response.toJSON();
    genres = genres.body.genres
    res.json(genres)
}));



// api to grab specific podcast
router.get('/podcasts/:id(\\d+)', asyncHandler(async (req, res) => {
    const id = req.params.id;
    
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
    final.podcastId = id
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
