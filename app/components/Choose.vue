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

      <p class="text-gray-300 text-sm md:text-base max-w-2xl mx-auto mb-12">
        Choosing MASIA TRADE SDN. BHD. means partnering with a team that values
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
    title: 'Strong Market Understanding',
    icon: 'mdi:chart-line',
    desc:
      'Deep insights into local and global markets that help businesses navigate complex trading conditions confidently.'
  },
  {
    title: 'Fully Licensed & Compliant',
    icon: 'mdi:shield-check-outline',
    desc:
      'Operations aligned with regulatory standards, ensuring transparent, reliable, and long-term compliant relationships.'
  },
  {
    title: 'Tailored Strategies',
    icon: 'mdi:lightbulb-on-outline',
    desc:
      'Custom solutions designed around each client’s objectives, enabling purposeful, strategic, and measurable outcomes.'
  },
  {
    title: 'Dual Expertise',
    icon: 'mdi:briefcase-variant-outline',
    desc:
      'Combined strengths in trading and business advisory for more informed, practical, and effective decision-making.'
  },
  {
    title: 'Transparent & Ethical Approach',
    icon: 'mdi:scale-balance',
    desc:
      'We operate with honesty, clarity, and discipline—ensuring every engagement is built on trust and accountability.'
  },
  {
    title: 'Extensive Industry Connections',
    icon: 'mdi:network-outline',
    desc:
      'Strong networks across multiple sectors, creating access to opportunities, partnerships, and growth possibilities.'
  }
]
</script>
