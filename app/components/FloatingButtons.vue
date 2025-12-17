<template>
  <div
    class="fixed bottom-6 right-6 flex flex-col gap-4 z-[9999] pointer-events-auto"
  >
    <button
      class="w-14 h-14 rounded-full bg-blue-500 hover:bg-blue-600 text-white flex items-center justify-center shadow-xl transition cursor-pointer"
      aria-label="Scroll to Top"
      @click="scrollToTop"
    >
      <span class="text-2xl">↑</span>
    </button>
  </div>
</template>

<script setup>
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}
</script>
