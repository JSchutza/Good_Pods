
// imports here:



// functions here:
const deleteUser = async (user_id) => {
  const response = await fetch(`/api/users/${user_id}`, {
    method: 'DELETE'
  });


};






// dom listener here:
window.addEventListener("DOMContentLoaded", (event)=>{

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

        });

        const data = await res.json();
        const messageDiv = document.querySelector('.message');
        messageDiv.innerHTML = data.message;

      });

    });


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


  // event listener for the delete account link
  const deleteLink = document.querySelector('.delete-account');
  deleteLink.addEventListener("click", async(event) => {
    // keep the link from its default behavior
    event.preventDefault();

    const user_id = deleteLink.id;
    await deleteUser(user_id);


  });



});
