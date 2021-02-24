const searchButton = document.getElementById("search-button")
searchButton.addEventListener('click', () => {
  console.log(window.getSelection().toString())
})