import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useCountStore = defineStore('counter', () => {
  const shareCount = ref(0)
  const shareTripleCount = computed(() => shareCount.value * 3)

  function increment() {
    shareCount.value++
  }

  function decrement() {
    shareCount.value--
  }

  function reset(newValue?: number) {
    shareCount.value = newValue ?? 0
  }

  return {
    shareCount,
    shareTripleCount,
    increment,
    decrement,
    reset,
  }
})
