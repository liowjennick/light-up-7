export default defineNuxtPlugin(() => {
  window.addEventListener('pageshow', (event) => {
    if (event.persisted) {
      window.location.reload()
    }
  })
})
