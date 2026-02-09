import { ref, watch, onUnmounted, type Ref } from 'vue'

export interface UseScrollRevealOptions {
  /** Root margin (e.g. "-50px" to trigger when 50px from viewport bottom) */
  rootMargin?: string
  /** Visibility threshold 0–1 */
  threshold?: number
  /** Run only once (stay visible after first reveal) */
  once?: boolean
}

/**
 * Composable that observes an element and sets isVisible when it enters the viewport.
 * Use with :class="{ 'reveal--visible': isVisible }" and CSS for opacity/transform transitions.
 */
export function useScrollReveal(
  target: Ref<HTMLElement | null | undefined>,
  options: UseScrollRevealOptions = {}
) {
  const { rootMargin = '0px 0px -80px 0px', threshold = 0.1, once = true } = options
  const isVisible = ref(false)

  let observer: IntersectionObserver | null = null

  const setupObserver = () => {
    const el = target.value
    if (!el || typeof IntersectionObserver === 'undefined') return

    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            isVisible.value = true
            if (once && observer) {
              observer.disconnect()
              observer = null
            }
          } else if (!once) {
            isVisible.value = false
          }
        }
      },
      { rootMargin, threshold }
    )
    observer.observe(el)
  }

  watch(target, (el) => {
    if (observer) {
      observer.disconnect()
      observer = null
    }
    if (el) setupObserver()
  }, { immediate: true })

  onUnmounted(() => {
    if (observer) {
      observer.disconnect()
      observer = null
    }
  })

  return { isVisible }
}
