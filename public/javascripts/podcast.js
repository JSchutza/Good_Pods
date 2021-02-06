window.addEventListener('DOMContentLoaded', () => {
  const reviewArea = document.getElementById('ReviewDiv')
  const currentUserId = document.querySelectorAll('.userId').id;

  const popReviews = async (podcastId) => {
    const res = await fetch(`/api/podcasts/${podcastId}/reviews`)
    const json = await res.json()


    if (res.ok) {
      json.forEach(review => {


        let newReview = document.createElement("div")
        newReview.setAttribute('class', `user-${review.userId} pod-${review.podcastId}`);
        newReview.setAttribute('id', `review-${review.id}`)

        let userName = document.createElement('p');
        userName.setAttribute('class', `reviewer user-${review.userId} pod-${review.podcastId}`)
        userName.innerHTML = review.name;      // re-write

        let reviewText = document.createElement("p")
        reviewText.setAttribute('class', `review-text user-${review.userId} pod-${review.podcastId}`);

        let rating = document.createElement('p')
        rating.setAttribute('class', `rating user-${review.userId} pod-${review.podcastId}`);
        rating.innerHTML = 'Rating: ';
        for (let i = 0; i < review.rating; i++) {
          rating.innerHTML += '☆';
        }

        reviewText.innerHTML = review.reviewText;
        newReview.appendChild(userName);
        newReview.appendChild(rating);
        newReview.appendChild(reviewText);

        if (review.userId === currentUserId) {
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


  const podcastId = document.querySelector('.idgrabber').id;
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
  const getTheAverageRating = async () => {
    
    let rating = document.querySelectorAll(".avgRating")[0]
      const id = rating.id.split("-")[1]
      const res = await fetch(`/api/podcasts/${id}`)
      if(res.ok){
        const resJson = await res.json()
        console.log(resJson)
        const averageRating = resJson.averageScore
        if(!averageRating){
          rating.innerHTML = 'This podcast has no current ratings'
        }
        else
        {
        let stars = ''
        for (let i =0; i< averageRating; i++){
          stars+='&#9733; '
        }
        rating.innerHTML=`Average Rating <span class='Avg_Stars'>${stars}`
      }
      }
      
    }
  getTheAverageRating()
})

