const searchButton = document.getElementById("search-button")
const main = document.getElementById('main')
searchButton.addEventListener('click', (e) => {

  const highlightedText = window.getSelection().toString()

  fetch(`/search_dreams?text=${highlightedText}`).then((data) => {
    data.json().then((json) => {
      main.insertAdjacentHTML('beforeend', json.html)
    })
  })
  
})