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

      <p class="text-gray-300 text-sm md:text-base max-w-2xl mx-auto mb-12">
        Delivering pragmatic trading and advisory solutions with efficiency, clarity,
        and consistent excellence.
      </p>

      <div class="w-24 h-[3px] bg-blue-400/40 mx-auto rounded mb-12" />

      <div class="grid md:grid-cols-2 gap-10 text-left">
        <div
          v-for="(service, i) in services"
          :key="service.title"
          class="p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl text-left
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

          <p class="text-gray-300 text-sm md:text-base leading-relaxed mb-4">
            {{ service.intro }}
          </p>

          <ul class="text-sm md:text-base text-gray-300 space-y-1.5">
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
    title: 'General Goods Trading – Export & Import',
    icon: 'mdi:swap-horizontal-circle-outline',
    intro:
      'We specialize in trading activities across various sectors with strong networks, structured processes, and robust compliance.',
    points: [
      'Cross-border trading of selected general goods.',
      'Support for sourcing, negotiation, and coordination.',
      'Supply chain visibility and documentation support.',
      'Practical, execution-focused trading management.'
    ]
  },
  {
    title: 'Retail of Non-Specialized Goods',
    icon: 'mdi:storefront-outline',
    intro:
      'Providing access to diverse product categories and distribution support to meet evolving market needs.',
    points: [
      'Mix of products across multiple category groups.',
      'Support for both wholesale and retail environments.',
      'Reliable coordination between suppliers and buyers.',
      'Flexible structures tailored to client operations.'
    ]
  }
]
</script>
