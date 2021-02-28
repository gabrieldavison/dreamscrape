
document.body.addEventListener("ajax:success", (event) => {
  const main = document.getElementById('main')
  const [data, status, xhr] = event.detail;
  const response = JSON.parse(xhr.responseText)
  if (event.target.dataset.trigger === 'display_dream') {
    const containingList = event.path.find((node) => node.className === 'search-results')
    clearNodesInFront(event.target, containingList)
    main.insertAdjacentHTML("beforeend", response.html)
      main.scroll({
      left: main.scrollWidth,
      behavior: 'smooth'
    })
  }
});



function clearNodesInFront(node, container) {
  console.log(container)
  while (container.nextSibling) {
    main.removeChild(container.nextSibling)
  }
}