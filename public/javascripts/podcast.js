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

        let rating = document.createElement('p')
        rating.setAttribute('class', `rating user-${review.userId} pod-${review.podcastId}`);
        rating.innerHTML = 'Rating: ';
        for (let i = 0; i < review.rating; i++) {
          rating.innerHTML += '☆';
        }
        console.log('review.userId: ', review.userId);
        reviewText.innerHTML = review.reviewText;
        newReview.appendChild(userName);
        newReview.appendChild(rating);
        newReview.appendChild(reviewText);


        let deleteButton = document.createElement('button');
        deleteButton.setAttribute('class', `delete-button`);
        deleteButton.setAttribute('id', `${review.id}`)
        deleteButton.innerText = 'Delete Review'
        newReview.appendChild(deleteButton);

        // if (review.userId === currentUserId) {
        //   deleteButton.disabled = false;
        // } else {
        //   deleteButton.disabled = true;
        // }
        reviewArea.appendChild(newReview);
      })
    }
    else {
      throw new Error('Unable to populate reviews at this time.')
    }
  }


  const podcastId = document.querySelector('.idgrabber').id;
  popReviews(podcastId)




  //trying to delete a single review
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

})

