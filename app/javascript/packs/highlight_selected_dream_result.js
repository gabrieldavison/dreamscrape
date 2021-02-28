document.body.addEventListener('click', (e) => {

  if (e.target.className === "search-results__link") {
      clearHighlights(e.path.find(item => item.nodeName === "UL"))
      highlightItem(e.target.parentNode)
  }
})

function highlightItem(item) {

  item.classList.toggle("search-results__item--selected")
}

function clearHighlights(container) {

  Array.from(container.children).forEach(child => {
    child.classList.remove("search-results__item--selected")
  })
}