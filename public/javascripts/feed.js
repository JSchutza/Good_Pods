window.addEventListener('DOMContentLoaded', async ()=> {
  let newFeatures = document.getElementById('newPods')

  const featuredPodList = await featuredPods()
  const header = document.createElement("h2")
  console.log(featuredPodList)
  featuredPodList.forEach( pod => {
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
