window.addEventListener('DOMContentLoaded', async ()=> {

  let newFeatures = document.getElementById('newPods')


  const featuredPodList = await featuredPods()
  populateFeatures(featuredPodList)
  getTheAverageRating()
})
const featuredPods = async() => {
  const res = await fetch('/api/podcasts')
  const resJson = await res.json()
  const featuredPods = []
  if (res.ok) {
    for (let i =0; i < 5; i++){
      const ele= resJson[Math.floor(Math.random()* resJson.length)]
      if (!featuredPods.includes(ele)){
        featuredPods.push(ele)
      } else{
        i--
      }
      
    }
  }
  return featuredPods
}
const populateFeatures = (featuredList) => {
  let newFeatures = document.getElementById('newPods')
  const header = document.createElement("h2")
  featuredList.forEach( pod => {
    const featPodDiv = document.createElement('div')
    const featPodimg = document.createElement("img")
    const featPod= document.createElement('a')
    featPod.innerText= `${pod.name}`
    featPodimg.setAttribute('src', `images/catalog/${pod.id}.jpeg`)
    featPod.setAttribute('href', `/podcasts/${pod.id}`)
    featPodimg.setAttribute('class', `feat__pod__img`)
    featPodimg.setAttribute("onError","src='/images/logo.png'")
    featPod.setAttribute('class', 'feat__pod__link')
    featPodDiv.setAttribute('class', `podcast_div`)
    featPodDiv.appendChild(featPod)
    featPodDiv.appendChild(featPodimg)
    newFeatures.appendChild(featPodDiv)
  })

}

const getTheAverageRating = async () => {
  
  let ratings = document.querySelectorAll(".avgRating")
  ratings.forEach( async rating => {
    const id = rating.id.split("-")[1]
    const res = await fetch(`api/podcasts/${id}`)
    const resJson = await res.json()
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
    rating.innerHTML=`Average Rating <span class='stars'>${stars}`
  }

  
}

  )}


