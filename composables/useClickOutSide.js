import { onMounted, onBeforeUnmount } from 'vue'

export function useClickOutside(el, handler) {
  const listener = (event) => {
    if (!el.value || el.value.contains(event.target)) {
      return
    }
    handler(event)
  }

  onMounted(() => {
    document.addEventListener('click', listener)
  })

  onBeforeUnmount(() => {
    document.removeEventListener('click', listener)
  })
}
