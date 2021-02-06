window.addEventListener("load", (event)=>{
    console.log("hello from javascript!")
    const reviewArea = document.getElementById('ReviewDiv')

    const shelfButtons = document.querySelectorAll(".shelf_btn")
    shelfButtons.forEach(shelfButton => {
      
      shelfButton.addEventListener("click", async (event) => {
        let shelfButton = event.target
        let shelfId = shelfButton.id
        shelfId = shelfId.split("_").join(" ")
        const podcastId = shelfButton.parentElement.id
       const res = await fetch("/api/shelves", {
          method: "POST",
          credentials: 'same-origin',
          headers: {
            "Content-Type" : "application/json"
          },
          body: JSON.stringify({"podcastId": podcastId, "shelfType": shelfId})
      
        })
      })
    })
    

  // const popReviews = async (id) => {
  //   const res = await fetch(`api/podcasts/${id}/reviews`)
  //   const json = await res.json()
  //   console.log(json)
  //   // reviews.forEach(review => {
  //   //  const newReview= document.createElement("div")
      
  //   //  const reviewText = document.createElement("p")
      
  //   // })
  // }
  // popReviews(1)



})
