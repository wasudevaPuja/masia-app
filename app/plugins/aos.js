import AOS from 'aos'
import 'aos/dist/aos.css'

export default defineNuxtPlugin((nuxtApp) => {
  if (import.meta.client) {
    nuxtApp.hook('app:suspense:resolve', () => {
      AOS.init({
        duration: 700,
        once: true,
        easing: 'ease-out-cubic'
      })
    })
  }
})
