
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

