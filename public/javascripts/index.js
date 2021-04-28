
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
  searchTerm.split(" ").join("%20")
  if (searchTerm===''){
    const searchResultsDiv = document.getElementById("searchResults")
    searchResultsDiv.innerText="Please enter a search term."
  }
  const response = await fetch(`/search/${searchTerm}`)
  const resJson = await response.json()
  console.log(resJson)
  

  // const term = new RegExp(`\w*\s*\w*\s*\w*\s*\w*\s*${searchTerm}\w*\s*\w*\s*\w*\s*\s*\w*\s*\w*`, 'i')
  // const res = await fetch("/api/podcasts")
  // const resJson = await res.json()
  let searchResults = []
  if (response.ok){
    searchResults = resJson
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
