window.addEventListener("load", (event)=>{
    console.log("hello from javascript!")
    const reviewArea = document.getElementById('ReviewDiv')



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