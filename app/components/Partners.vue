<template>
  <section
    id="partners"
    class="relative py-28 bg-[#0B1E35] text-gray-200"
  >
    <div class="max-w-7xl mx-auto px-6 text-center">
      <p class="uppercase tracking-[0.3em] text-blue-300/80 text-xs font-semibold mb-4">
        Our Partners
      </p>

      <h2
        class="text-4xl md:text-5xl font-bold text-white mb-4"
        data-aos="fade-up"
      >
        Trusted by Leading Companies
      </h2>

      <p
        class="text-gray-300 text-sm md:text-base max-w-2xl mx-auto mb-12"
        data-aos="fade-up"
      >
        We collaborate with trusted partners across industries to deliver
        sustainable value, strategic growth, and long-term success.
      </p>

      <div class="w-24 h-[3px] bg-blue-400/40 mx-auto rounded mb-16" />

      <div
        class="grid grid-cols-2 sm:grid-cols-3 gap-10 items-center"
      >
        <div
          v-for="(partner, i) in partners"
          :key="partner.name"
          class="flex items-center justify-center h-28 md:h-32
         bg-white/5 backdrop-blur-xl
         border border-white/10 rounded-2xl shadow-lg
         hover:border-blue-300/40 transition-all duration-300
         hover:-translate-y-1"
          data-aos="zoom-in"
          :data-aos-delay="i * 70"
        >
          <img
            :src="partner.logo"
            :alt="partner.name"
            class="max-h-14 max-w-[70%] object-contain
           grayscale opacity-80
           transition-all duration-300
           hover:grayscale-0 hover:opacity-100"
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const partners = [
  {
    name: 'Partner One',
    logo: '/img/ava.jpg'
  },
  {
    name: 'Partner Two',
    logo: '/img/ferron.png'
  },
  {
    name: 'Partner Three',
    logo: '/img/gufo.png'
  },
  {
    name: 'Partner Four',
    logo: '/img/nomaspect.png'
  },
  {
    name: 'Partner Five',
    logo: '/img/omega.jpg'
  },
  {
    name: 'Partner Six',
    logo: '/img/paradigm.png'
  },
  {
    name: 'Partner Seven',
    logo: '/img/qingdao.jpeg'
  },
  {
    name: 'Partner Eight',
    logo: '/img/shannon.png'
  },
  {
    name: 'Partner Nine',
    logo: '/img/sprawdzaj.svg'
  }
]
</script>
