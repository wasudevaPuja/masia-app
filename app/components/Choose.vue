<template>
  <section
    id="why"
    class="relative py-28 bg-[#0B1E35] text-gray-200"
  >
    <div class="max-w-7xl mx-auto px-6 text-center">
      <p class="uppercase tracking-[0.3em] text-blue-300/80 text-xs font-semibold mb-4">
        Why Clients Choose Us
      </p>

      <h2
        class="text-4xl md:text-5xl font-bold text-white mb-4"
        data-aos="fade-up"
      >
        Why Work With Us
      </h2>

      <p
        class="text-gray-300 text-sm md:text-base max-w-2xl mx-auto mb-12"
        data-aos="fade-up"
      >
        Choosing MASIA GLOBAL TRADE SDN. BHD. means partnering with a team that values
        precision, trust, and measurable impact in every decision.
      </p>

      <div class="w-24 h-[3px] bg-blue-400/40 mx-auto rounded mb-16" />

      <div class="grid md:grid-cols-3 gap-10">
        <div
          v-for="(item, i) in whyUs"
          :key="item.title"
          class="p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl text-left
                 hover:border-blue-300/40 hover:-translate-y-1 transition-all duration-300"
          data-aos="zoom-in"
          :data-aos-delay="i * 80"
        >
          <div class="flex items-center gap-3 mb-3">
            <UIcon
              :name="item.icon"
              class="w-6 h-6 text-blue-300"
            />
            <h3 class="text-xl font-bold text-white">
              {{ item.title }}
            </h3>
          </div>
          <p class="text-gray-300 text-sm md:text-base leading-relaxed">
            {{ item.desc }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const whyUs = [
  {
    title: 'Global Market Acumen',
    icon: 'mdi:earth',
    desc:
      'Strong, data-driven understanding of international trade dynamics and market positioning.'
  },
  {
    title: 'Regulatory Assurance',
    icon: 'mdi:shield-check',
    desc:
      'Fully licensed and compliant across all operational and financial jurisdictions.'
  },
  {
    title: 'Integrated Expertise',
    icon: 'mdi:puzzle-outline',
    desc:
      'Seamless integration of strategic advisory, trading, and execution capabilities.'
  },
  {
    title: 'Ethical Governance',
    icon: 'mdi:account-tie',
    desc:
      'Transparent, ethical, and professional conduct in every engagement.'
  },
  {
    title: 'Extensive Industry Network',
    icon: 'mdi:hub-outline',
    desc:
      'Reliable sourcing and distribution supported by strong global connections.'
  },
  {
    title: 'Operational Excellence',
    icon: 'mdi:cogs',
    desc:
      'Consistent delivery, high standards, and dependable execution.'
  }
]
</script>
