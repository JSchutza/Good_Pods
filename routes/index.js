const express = require('express');
const unirest = require("unirest")
const router = express.Router();
const { User, Podcast, Genre, Shelf } = require("../db/models")
const { csrf, csrfProtection, bcrypt, check, validationResult, asyncHandler, createShelves } = require("../lib/util")
const { loginUser, logoutUser } = require("../auth")
const apiKey = process.env.LISTEN_API_KEY
const baseUrl = 'https://listen-api-test.listennotes.com/api/v2'
// for the home page



router.get('/', csrfProtection, (req, res) => {
  
  res.render('index', { csrfToken: req.csrfToken() })
});


// for the pod feed page
 router.get('/feed', asyncHandler( async (req, res) => {
  
  const genre_info = await unirest.get(`${baseUrl}/genres?top_level_only=1`)
  .header('X-ListenAPI-Key', apiKey)
    genre_info.toJSON();
    const genres = genre_info.body.genres;
   
    // for (let i = 0; i< genreobjlist.length; i++){
    //   let genreId = genreobjlist[i].id
    //   let genreName = genreobjlist[i].name
    //   let podcasts = await unirest.get(`${baseUrl}/best_podcasts?genre_id=${genreId}&page=2&region=us&safe_mode=0`).header('X-ListenAPI-Key',apiKey)
    //   podcasts = await podcasts.toJSON()
    //   let genrePods = {genre: genreName, podcasts: podcasts.body.podcasts}
    //   genres.push(genrePods)
    // }

    const featuredRes = await unirest.get(`${baseUrl}/podcasts/25212ac3c53240a880dd5032e547047b/recommendations?safe_mode=0`)
  .header('X-ListenAPI-Key', apiKey)
    if (featuredRes.ok) {
      let resJson = await featuredRes.toJSON();
      // await console.log(resJson, 'resJson from recommendd pods in feed')
      let recommended= resJson.body;
      await console.log(recommended, 'recommended pods from feed')
      // let featuredPods = []
      
      // for (let i =0; i < 5; i++){
        //   // const ele= recommended[Math.floor(Math.random()*recommended.length)]
        //   const ele = await recommended[i]
        //   await console.log(ele, 'recommendation from feed route')
        //   if (!featuredPods.includes(ele)){
          //     await featuredPods.push(ele)
          //   }
          // }

      //featuredPods was undefined...for now i am sending all the featured pods as recommended

      // await console.log(featuredPods, 'featuredPods')
        res.render('feed', {genres, recommended})
    
        //  res.render('feed', {genres, recommended})
    } else {
      return {errors: 'feed not working'}
    }
    
  }));

  // router.get('/me', asyncHandler( async (req, res) => {
  
  //    const user_id = req.session.auth.userId;
    
  //   const users_shelf = await Shelf.findAll({
  //       where: { userId: user_id }
  //   });
    
  //   let result = []
    
    
  //   for (let shelf in users_shelf){
  //       let currentShelf = {title:shelf.title}
  //       let newPodsArray = []
  //       for (let pod in shelf.podcasts){
  //           let podcast = await unirest.get(`https://listen-api.listennotes.com/api/v2/podcasts/${pod}?next_episode_pub_date=1479154463000&sort=recent_first`)
  //           .header('X-ListenAPI-Key', apiKey)
  //         podcast = await podcast.toJSON();
  //         podcast = podcast.body
  //           newPodsArray.push(podcast)
  //       }
  //       currentShelf.podcasts=newPodsArray
  //       result.push(currentShelf)
  //   }
   
  //   console.log(result)
  //   res.render("profile", {shelves:result});
  // }));



module.exports = router;
