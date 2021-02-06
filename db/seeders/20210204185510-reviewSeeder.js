'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Reviews', [
      {userId: 1,podcastId: 1,rating:1,reviewText:"Test review123123!@#!@#",createdAt:'2021-2-4',updatedAt:'2021-2-4',},
      {userId: 2,podcastId: 15,rating:4,reviewText:"I really like the cast, they hold my attention every episode!",createdAt:'2021-2-4',updatedAt:'2021-2-4',},
      {userId: 2,podcastId: 25,rating:1,reviewText:"I could not get into this one ",createdAt:'2021-2-4',updatedAt:'2021-2-4',},
      {userId: 3,podcastId: 1,rating:2,reviewText:"We're no strangers to love You know the rules and so do IA full commitment's what I'm thinking of You wouldn't get this from any other guy I just wanna tell you how I'm feeling Gotta make you understand Never gonna give you upNever gonna let you down Never gonna run around and desert youNever gonna make you cry Never gonna say goodbye Never gonna tell a lie and hurt you",createdAt:'2021-2-4',updatedAt:'2021-2-4',},
      {userId: 3,podcastId: 2,rating:5,reviewText:"Can always look forward to this at the end of the day",createdAt:'2021-2-4',updatedAt:'2021-2-4',},
      {userId: 4,podcastId: 8,rating:3,reviewText:"I don't feel strongly one way or the other about this",createdAt:'2021-2-4',updatedAt:'2021-2-4',},
      {userId: 4,podcastId: 4,rating:1,reviewText:"This is a scathing review that is different from everything else on the website. I didn't lke this podcast look at how much text I put in here. It is all grammatically correct TOO!",createdAt:'2021-2-4',updatedAt:'2021-2-4',},
      {userId: 5,podcastId: 8,rating:5,reviewText:"This is the best thing on the internet since Nyan cat",createdAt:'2021-2-4',updatedAt:'2021-2-4',},
      {userId: 5,podcastId: 20,rating:4,reviewText:"I cant believe this hasn't been made sooner!",createdAt:'2021-2-4',updatedAt:'2021-2-4',},
      {userId: 5,podcastId: 1,rating:5,reviewText:"I love this!",createdAt:'2021-2-4',updatedAt:'2021-2-4',},
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Reviews', null, {});
  }
};
