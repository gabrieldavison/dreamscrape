// const dreams = document.querySelectorAll('.dream')
// dreams.forEach(dream => {
//   dream.addEventListener('click', (e) => {
//     const highlightedText = window.getSelection().toString()
//     if (highlightedText.length > 0) {
//       fetch(`/search_dreams?text=${highlightedText}`).then((data) => {
//         data.json().then((json) => {
//       clearNodesInFront(dream)
//       main.insertAdjacentHTML('beforeend', json.html)
//     })
//   })
//     }
//   })
// })

document.body.addEventListener('click', (e) => {
  if (e.target.className === 'dream-text') {
    const dream = e.target
    const highlightedText = window.getSelection().toString()



    const main = document.getElementById('main')
    if (highlightedText.length > 1) {
      unHighlightSpans(dream)
      highlightSelection()
      fetch(`/search_dreams?text=${highlightedText}`).then((data) => {
        data.json().then((json) => {
          clearNodesInFront(dream.parentNode)
          main.insertAdjacentHTML('beforeend', json.html)
          main.scroll({
            left: main.scrollWidth,
            behavior: 'smooth'
          })

        })
      })
    }
  }
})

function unHighlightSpans(target) {
  const highlightedSpans = target.querySelectorAll(".dream__search--next")
  if (highlightedSpans.length > 0) {
      highlightedSpans.forEach(span => {
    span.classList.remove('dream__search--next')
  })
  }

}

function highlightSelection() {
  const selection= window.getSelection().getRangeAt(0);
  const selectedText = selection.extractContents();
  const span = document.createElement("span");
  span.classList.add("dream__search--next")
  span.appendChild(selectedText);
  selection.insertNode(span);
  window.getSelection().removeAllRanges()
}

function clearNodesInFront(node) {
  while (node.nextSibling) {
    main.removeChild(node.nextSibling)
  }
}
