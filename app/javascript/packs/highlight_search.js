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
    if (highlightedText.length > 0) {
      fetch(`/search_dreams?text=${highlightedText}`).then((data) => {
        data.json().then((json) => {
          clearNodesInFront(dream.parentNode)
          main.insertAdjacentHTML('beforeend', json.html)
          // main.scrollLeft = main.scrollWidth
          main.scroll({
            left: main.scrollWidth,
            behavior: 'smooth'
          })

        })
      })
    }
  }
})

function clearNodesInFront(node) {

  while (node.nextSibling) {
    main.removeChild(node.nextSibling)
  }
}