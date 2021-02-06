window.addEventListener('DOMContentLoaded', () => {
  const reviewArea = document.getElementById('ReviewDiv')
  const currentUserId = document.querySelectorAll('.userId').id;

  const popReviews = async (podcastId) => {
    const res = await fetch(`/api/podcasts/${podcastId}/reviews`)
    const json = await res.json()
    console.log(json)

    if (res.ok) {
      json.forEach(review => {

        let newReview = document.createElement("div")
        newReview.setAttribute('class', `user-${review.User.userId} pod-${review.podcastId}`);
        newReview.setAttribute('id', `review-${review.id}`)

        let userName = document.createElement('p');
        userName.setAttribute('class', `reviewer user-${review.User.userId} pod-${review.podcastId}`)
        userName.innerHTML = review.User.name;

        let reviewText = document.createElement("p")
        reviewText.setAttribute('class', `review-text user-${review.User.userId} pod-${review.podcastId}`);

        let rating = document.createElement('p')
        rating.setAttribute('class', `rating user-${review.User.userId} pod-${review.podcastId}`);
        rating.innerHTML = 'Rating: ';
        for (let i = 0; i < review.rating; i++) {
          rating.innerHTML += '☆';
        }

        reviewText.innerHTML = review.reviewText;
        newReview.appendChild(userName);
        newReview.appendChild(rating);
        newReview.appendChild(reviewText);

        if (review.User.userId === currentUserId) {
          let deleteButton = document.createElement('button');
          deleteButton.setAttribute('class', `delete-button`);
          deleteButton.setAttribute('id', `${review.id}`)
          newReview.appendChild(deleteButton);
        }

        reviewArea.appendChild(newReview);
      })

    } else {
      throw new Error('Unable to populate reviews at this time.')
    }
  }


  const podcastId = document.querySelector('.idgrabber')
  popReviews(podcastId)



  const displayReviews = (reviews) => {

  }

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

    // const reviews = reviewArea.childNodes;
    // const remaining = reviews.filter((el, i) => {
    //   return (i != reviewId)
    // })

    // remaining.forEach(review => {
    //   popReviews()
    // })
  }


  reviewArea.addEventListener('click', e => {
    if (e.target.className === 'delete-button') {
      deleteReview(e.target.id)
    }
  })

})


