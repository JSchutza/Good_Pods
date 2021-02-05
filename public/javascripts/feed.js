window.addEventListener('DOMContentLoaded', () => {
  const reviewArea = document.getElementById('ReviewDiv')
  const reviewForm = document.getElementById('review-form')
  const stars = document.querySelectorAll('.stars');
  const reviewField = document.querySelectorAll('.review');

  const popReviews = async (id) => {
    const res = await fetch(`api/podcasts/${id}/reviews`)
    const json = await res.json()
    console.log(json)
    // reviews.forEach(review => {
    //  const newReview= document.createElement("div")

    //  const reviewText = document.createElement("p")

    // })
  }
  popReviews(1)
})



// const addReview = async (rating, input) => {
//   const res = await fetch(`/podcasts/${id}/reviews`, {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({ rating: rating, reviewText: input })
//   })
//   const json = await res.json();
//   console.log(json)
//   if (res.ok) {
//     const review = document.createElement('div');
//     const reviewText = document.createElement('p');
//     reviewText.innerHTML = json.reviewText[json.length - 1];
//     const rating = document.createElement('p');
//     const stars = json.star.value[json.length - 1];
//     rating.innerHTML = 'Rating: ';
//     for (let i = 0; i < stars; i++) {
//       rating.innerHTML += '☆';
//     }
//     review.appendChild(stars);
//     review.appendChild(reviewText);
//     reviewArea.appendChild(review);
//   } else {
//     throw new Error('Could not add review');
//   }
// }


// reviewForm.addEventListener('submit', e => {
//   e.preventDefault();
//   addReview(stars.value, reviewField.value)
// })


