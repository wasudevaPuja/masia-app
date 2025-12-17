<template>
  <section
    id="services"
    class="relative py-28 bg-[#0B1E35] text-gray-200"
  >
    <div class="max-w-7xl mx-auto px-6 text-center">
      <p class="uppercase tracking-[0.3em] text-blue-300/80 text-xs font-semibold mb-4">
        What We Do
      </p>

      <h2
        class="text-4xl md:text-5xl font-bold text-white mb-4"
        data-aos="fade-up"
      >
        Our Services
      </h2>

      <p
        class="text-gray-300 text-sm md:text-base max-w-2xl mx-auto mb-12"
        data-aos="fade-up"
      >
        Strategic Trade & Distribution
      </p>

      <div class="w-24 h-[3px] bg-blue-400/40 mx-auto rounded mb-16" />

      <div class="grid md:grid-cols-2 gap-10 text-left">
        <div
          v-for="(service, i) in services"
          :key="service.title"
          class="p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl
                 hover:border-blue-300/40 hover:-translate-y-1 transition-all duration-300"
          data-aos="fade-up"
          :data-aos-delay="i * 120"
        >
          <div class="flex items-center gap-3 mb-4">
            <UIcon
              :name="service.icon"
              class="w-7 h-7 text-blue-300"
            />
            <h3 class="text-xl font-bold text-white">
              {{ service.title }}
            </h3>
          </div>

          <p class="text-gray-300 text-base leading-relaxed mb-5">
            {{ service.intro }}
          </p>

          <ul class="space-y-2 text-gray-200 text-sm md:text-base">
            <li
              v-for="(item, idx) in service.points"
              :key="idx"
            >
              • {{ item }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const services = [
  {
    title: 'Trade Execution & Sourcing',
    icon: 'mdi:swap-horizontal',
    intro:
      'We support international trade execution through structured export–import activities and client-driven sourcing across multi-category general goods.',
    points: [
      'Cross-border export and import of general goods',
      'Client-driven sourcing based on commercial requirements',
      'Supplier identification, due diligence, and coordination',
      'Fee-based or contract-based trading arrangements'
    ]
  },
  {
    title: 'Distribution & Trade Support',
    icon: 'mdi:truck-delivery-outline',
    intro:
      'We provide structured distribution and trade support services to ensure smooth delivery, regulatory alignment, and administrative efficiency.',
    points: [
      'Trade documentation and regulatory coordination',
      'Administrative and transactional support',
      'Structured distribution aligned with transaction needs',
      'Domestic and international delivery coordination'
    ]
  }
]
</script>
