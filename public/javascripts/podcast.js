window.addEventListener('DOMContentLoaded', () => {
  const reviewArea = document.getElementById('ReviewDiv')


  const popReviews = async (podcastId) => {
    const res = await fetch(`/api/podcasts/${podcastId}/reviews`)
    const json = await res.json()
    // console.log(json)

    if (res.ok) {
      json.forEach(review => {

        let newReview = document.createElement("div")
        newReview.setAttribute('class', `user-${review.userId}`);
        newReview.setAttribute('id', `review-${review.id}`)

        let userName = document.createElement('p');
        userName.setAttribute('class', `reviewer user-${review.userId} pod-${review.podcastId}`)
        userName.innerHTML = review.name;

        let reviewText = document.createElement("p")
        reviewText.setAttribute('class', `review-text user-${review.userId} pod-${review.podcastId}`);

        let ratingtext = document.createElement('p')
        ratingtext.innerHTML = "Rating: "
        let rating = document.createElement('span')
        rating.setAttribute('class', `rating user-${review.userId} pod-${review.podcastId}`);
        rating.innerHTML = '';
        for (let i = 0; i < review.rating; i++) {
          rating.innerHTML += '&#9733; ';
        }
        ratingtext.appendChild(rating)
        // console.log('review.userId: ', review.userId);
        reviewText.innerHTML = review.reviewText;
        newReview.appendChild(userName);
        newReview.appendChild(ratingtext);
        newReview.appendChild(reviewText);


        let deleteButton = document.createElement('button');
        deleteButton.setAttribute('class', `delete-button`);
        deleteButton.setAttribute('id', `${review.id}`)
        deleteButton.innerText = 'Delete Review'
        newReview.appendChild(deleteButton);

        reviewArea.appendChild(newReview);
      })
    }
    else {
      throw new Error('Unable to populate reviews at this time.')
    }
  }


  const podcastId = document.querySelector('.idgrabber').id;
  popReviews(podcastId)




  //delete a single review
  async function deleteReview(reviewId) {
    const res = await fetch(`/api/podcasts/${podcastId}/reviews/${reviewId}`, {
      method: 'DELETE'
    })
    if (res.ok) {
      const review = document.getElementById(`review-${reviewId}`)
      review.innerHTML = '';
    } else {
      throw new Error('Unable to delete review at this time.')
    }
  }

  reviewArea.addEventListener('click', e => {
    if (e.target.className === 'delete-button') {
      const currentUserId = document.querySelector('.userId').id;
      const review = document.getElementById(`review-${e.target.id}`);
      if (review.className === `user-${currentUserId}`) {
        deleteReview(e.target.id)
      } else {
        let msg = document.createElement('p');
        msg.innerText = 'You are not allowed to delete this review.'
        reviewArea.appendChild(msg);
      }
    }
  })


  const getTheAverageRating = async () => {

    let rating = document.querySelectorAll(".avgRating")[0]
    const id = rating.id.split("-")[1]
    const res = await fetch(`/api/podcasts/${id}`)
    if (res.ok) {
      const resJson = await res.json()
      const averageRating = resJson.averageScore
      if (!averageRating) {
        rating.innerHTML = 'This podcast has no current ratings'
      }
      else {
        let stars = ''
        for (let i = 0; i < averageRating; i++) {
          stars += '&#9733; '
        }
        rating.innerHTML = `Average Rating <span class='Avg_Stars'>${stars}`
      }
    }

  }
  getTheAverageRating()
  const podcastName = document.getElementById("innerHeader").className
    const shelfButtons = document.querySelectorAll(".shelf_btn")
    shelfButtons.forEach(shelfButton => {

      shelfButton.addEventListener("click", async (event) => {
        let shelfButton = event.target
        let shelfId = shelfButton.id
        shelfId = shelfId.split("_").join(" ")
        const podcastId = shelfButton.parentElement.id;
       const res = await fetch("/api/shelves", {
          method: "POST",
          credentials: 'same-origin',
          headers: {
            "Content-Type" : "application/json"
          },
          body: JSON.stringify({"podcastId": podcastId, "ShelfType": shelfId, "podcastName":podcastName})

        });

        const data = await res.json();
        const messageDiv = document.querySelector('.message');
        messageDiv.innerHTML = data.message;

      });

    });
})

