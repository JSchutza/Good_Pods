
  console.log('this works')
const shelfButtons = document.querySelectorAll(".shelf_btn")
shelfButtons.addEventListener("click",async (event) => {
  console.log('this works')
  const shelfButton = event.target.id
  await fetch("/api/shelves", {
    method: "POST",
    headers: {
      "Content-Type" : "application/json"
    },
    body: JSON.stringify({"podcastId": 1, "shelfType": `${shelfButton}`})

  })
})

window.addEventListener('DOMContentLoaded', () => {
  const reviewArea = document.getElementById('ReviewDiv')

  const popReviews = async (podcastId) => {
    const res = await fetch(`/api/reviews/${podcastId}`)
    const json = await res.json()
    console.log(json)

    if (res.ok) {
      json.forEach(review => {

        let newReview = document.createElement("div")
        newReview.setAttribute('class', `review ${review.User.userId}`);

        let userName = document.createElement('p');
        userName.setAttribute('class', `reviewer ${review.User.userId}`)
        userName.innerHTML = review.User.name;

        let reviewText = document.createElement("p")
        reviewText.setAttribute('class', `review-text ${review.User.userId}`);

        let rating = document.createElement('p')
        rating.setAttribute('class', `rating ${review.User.userId}`);
        rating.innerHTML = 'Rating: ';
        for (let i = 0; i < review.rating; i++) {
          rating.innerHTML += '☆';
        }

        reviewText.innerHTML = review.reviewText;
        newReview.appendChild(userName);
        newReview.appendChild(rating);
        newReview.appendChild(reviewText);
        reviewArea.appendChild(newReview);
      })

    } else {
      throw new Error('Unable to populate reviews at this time.')
    }
  }


  const podcastId = document.querySelector('.idgrabber').id;
  console.log(podcastId);
  popReviews(podcastId)


  const deleteReview = async (podcastId) => {
    const res = await fetch(`/api/reviews/${podcastId}`, {
      method: 'DELETE'
    })


  }

})


