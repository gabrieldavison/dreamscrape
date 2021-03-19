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
    console.log(highlightedText)


    const main = document.getElementById('main')
    if (highlightedText.length > 1) {
      unwrapSpans(dream)
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

function unwrapSpans(target) {
  const wrappedSpans = target.querySelectorAll(".dream__search--next")
  if (wrappedSpans.length > 0) {
    wrappedSpans.forEach(span => {
      unwrapNode(span)
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

function unwrapNode(node) {

const el = node;

var parent = el.parentNode;

while (el.firstChild) parent.insertBefore(el.firstChild, el);


parent.removeChild(el);
}