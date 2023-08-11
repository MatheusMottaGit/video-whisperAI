const form = document.querySelector('#form')

form.addEventListener('submit', (event) => {
  event.preventDefault()

  try {
    loading()

    const formData = new FormData(form)
    const inputUrl = formData.get('url')
    
  } catch (error) {
    console.log('[SUBMIT_ERROR]:', error)
  }
})