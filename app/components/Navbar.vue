<template>
  <header
    :class="[
      'fixed top-0 left-0 w-full z-50 transition-all duration-300 backdrop-blur-md',
      scrolled
        ? 'bg-[#0B1E35]/95 border-b border-white/10 shadow-lg'
        : 'bg-transparent border-b border-transparent'
    ]"
  >
    <nav class="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
      <NuxtLink
        to="/"
        class="text-white text-xl font-semibold tracking-wide"
      >
        MASIA TRADE
      </NuxtLink>

      <ul class="hidden md:flex items-center gap-8 font-medium">
        <li
          v-for="item in menu"
          :key="item.id"
        >
          <span
            class="cursor-pointer transition"
            :class="activeSection === item.id ? 'text-blue-300' : 'text-white hover:text-blue-300'"
            @click="scrollTo(item.id)"
          >
            {{ item.label }}
          </span>
        </li>
      </ul>

      <button
        class="md:hidden relative w-8 h-8 flex flex-col justify-center items-center group cursor-pointer"
        @click="menuOpen = !menuOpen"
      >
        <span
          class="block w-6 h-[3px] bg-white rounded transition-all duration-300"
          :class="menuOpen ? 'rotate-45 translate-y-[6px]' : ''"
        />
        <span
          class="block w-6 h-[3px] bg-white rounded my-[6px] transition-all duration-300"
          :class="menuOpen ? 'opacity-0' : ''"
        />
        <span
          class="block w-6 h-[3px] bg-white rounded transition-all duration-300"
          :class="menuOpen ? '-rotate-45 -translate-y-[6px]' : ''"
        />
      </button>
    </nav>

    <transition name="slide">
      <div
        v-if="menuOpen"
        class="md:hidden bg-[#0B1E35]/95 px-6 py-4 border-t border-white/10"
      >
        <ul class="flex flex-col gap-4 text-white text-lg">
          <li
            v-for="item in menu"
            :key="item.id"
          >
            <span
              class="cursor-pointer transition"
              :class="activeSection === item.id ? 'text-blue-300' : 'text-white hover:text-blue-300'"
              @click="scrollTo(item.id)"
            >
              {{ item.label }}
            </span>
          </li>
        </ul>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const menuOpen = ref(false)
const activeSection = ref('hero')

// MENU LIST
const menu = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'services', label: 'Services' },
  { id: 'why', label: 'Why Us' },
  { id: 'contact', label: 'Contact' }
]

// Smooth scroll WITHOUT changing URL
const scrollTo = (id) => {
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
  menuOpen.value = false
}

// Scroll Spy (detect active section)
onMounted(() => {
  const sections = document.querySelectorAll('section[id]')

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          activeSection.value = entry.target.id
        }
      })
    },
    { threshold: 0.55 } // 55% visible
  )

  sections.forEach(section => observer.observe(section))
})

const scrolled = ref(false)

onMounted(() => {
  window.addEventListener('scroll', () => {
    scrolled.value = window.scrollY > 10
  })
})
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: 0.3s ease;
}
.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
