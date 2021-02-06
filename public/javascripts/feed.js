window.addEventListener('DOMContentLoaded', ()=> {
  let newFeatures = document.getElementById('newPods')
  
  const featuredPodList = featuredPods()
  const header = document.createElement("h2")
  // featuredPodList.forEach( pod => {
  //   const featPodDiv = document.createElement('div')
  //   const featPodimg = document.createElement("img")
  //   const featPod= document.createElement('a')
  //   featPodimg.setAttribute('src', `images/catalog/${pod.id}.jpeg`)
  //   featPod.setAttribute('href', `/podcasts/${pod.id}`)
  //   featPodDiv.appendChild(featPodimg)
  //   featPodDiv.appendChild()
  // })

  
})
const featuredPods = async() => {
  const res = await fetch('/api/podcasts')
  const resJson = await res.json()
  if (res.ok) {
    const featuredPods = []
    for (let i =0; i < 5; i++){
      featuredPods.push(resJson[Math.floor(Math.random()* resJson.length)])
    }
  }
  return resJson
}