// src/composables/useScrollReveal.js
import { onMounted, onUnmounted } from 'vue'

export function useScrollReveal(selector = '.reveal') {
  let observer = null

  onMounted(() => {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 }
    )

    document.querySelectorAll(selector).forEach((el) => observer.observe(el))
  })

  onUnmounted(() => {
    if (observer) observer.disconnect()
  })
}