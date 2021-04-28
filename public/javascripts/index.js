
const unirest = require("unirest");
const { apiKey } = require("../config");





// functions here:

window.addEventListener("DOMContentLoaded", async (event)=>{
  const searchButton = document.getElementById('searchButton')
  searchButton.addEventListener('click', (event)=> {
    document.getElementById('searchResults').classList.remove('hidden')
    search()
  })

});

const search= async () => {
  console.log("THIS IS WORKING?????")
  let searchTerm = document.getElementById('searchInput').value
  searchTerm.split(" ").join("%20")
  if (searchTerm===''){
    const searchResultsDiv = document.getElementById("searchResults")
    searchResultsDiv.innerText="Please enter a search term."
  }
  const response = await unirest.get(`https://listen-api.listennotes.com/api/v2/search?q=${searchTerm}&sort_by_date=0&type=episode&offset=0&len_min=10&len_max=30&genre_ids=68%2C82&published_before=1580172454000&published_after=0&only_in=title%2Cdescription&language=English&safe_mode=0`)
  .header('X-ListenAPI-Key', apiKey)
  const resJson = response.toJSON();

  // const term = new RegExp(`\w*\s*\w*\s*\w*\s*\w*\s*${searchTerm}\w*\s*\w*\s*\w*\s*\s*\w*\s*\w*`, 'i')
  // const res = await fetch("/api/podcasts")
  // const resJson = await res.json()
  const searchResults = []
  if (response.ok){
    searchResults = resJson.results
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
      podname.innerText= `${pod.title_original}`
      podimg.setAttribute('class', `feat__pod__img`)
      podimg.setAttribute('src', `${pod.thumbnail}`)
      podimg.setAttribute("onError","src='/images/logo.png'")
      ele.appendChild(podname)
      ele.appendChild(podimg)
      searchResultsDiv.appendChild(ele)
    })
  }

}
