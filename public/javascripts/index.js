
// imports here:




// functions here:

window.addEventListener("DOMContentLoaded", async (event)=>{
  const searchButton = document.getElementById('searchButton')
  searchButton.addEventListener('click', (event)=> {
    document.getElementById('searchResults').classList.remove('hidden')
    search()
  })

});

const search= async () => {
  let searchTerm = document.getElementById('searchInput').value
  if (searchTerm===''){
    const searchResultsDiv = document.getElementById("searchResults")
    searchResultsDiv.innerText="Please enter a search term."
  }
  const term = new RegExp(`\w*\s*${searchTerm}\w*\s*\w*\s*\w*\s*\s*\w*\s*\w*`, 'i')
  const res = await fetch("/api/podcasts")
  const resJson = await res.json()
  const searchResults = []
  if (res.ok){
    resJson.forEach(pod => {
      if(term.test(pod.name)){
        searchResults.push({name: pod.name, id: pod.id })
      }
      
    })
    const searchResultsDiv = document.getElementById("searchResults")
    if(searchResults.length=== 0){
      searchResultsDiv.innerText="There are no podcasts matching that search."
    }
    searchResults.forEach(pod => {
      searchResultsDiv.innerText=''
      const ele =document.createElement("div")
      const searchHeader = document.createElement('h1')
      searchHeader.innerText="Search Results"
      searchResultsDiv.appendChild(searchHeader)
      ele.setAttribute("class", "SearchResult___container")
      const podname = document.createElement('a')
      const podimg = document.createElement("img")
      podname.setAttribute('href', `/podcasts/${pod.id}`)
      podname.innerText= `${pod.name}`
      podimg.setAttribute('class', `feat__pod__img`)
      podimg.setAttribute('src', `/images/catalog/${pod.id}.jpeg`)
      podimg.setAttribute("onError","src='/images/logo.png'")
      ele.appendChild(podname)
      ele.appendChild(podimg)
      searchResultsDiv.appendChild(ele)
    })
  }

}
