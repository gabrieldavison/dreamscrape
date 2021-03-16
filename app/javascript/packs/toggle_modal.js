const modalLink = document.getElementById('modal-link')
const modal = document.getElementById('modal')
const closeModal = document.getElementById('close-modal')

modalLink.addEventListener('click', () => {
  modal.classList.toggle('hidden')
})

closeModal.addEventListener('click', () => {
  modal.classList.toggle('hidden')
})