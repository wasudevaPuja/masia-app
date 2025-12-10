<template>
  <section
    id="vision"
    class="relative py-28 bg-[#0B1E35] text-gray-200"
  >
    <div class="max-w-7xl mx-auto px-6 text-center">
      <p class="uppercase tracking-[0.3em] text-blue-300/80 text-xs font-semibold mb-4">
        Our Guiding Principles
      </p>

      <h2
        class="text-4xl md:text-5xl font-bold text-white mb-4"
        data-aos="fade-up"
      >
        Vision <span class="text-blue-300">&amp;</span> Mission
      </h2>

      <div class="w-24 h-[3px] bg-blue-400/40 mx-auto rounded mb-16" />

      <div class="grid md:grid-cols-2 gap-10">
        <div
          class="p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl text-left
                 hover:border-blue-300/40 hover:-translate-y-1 transition-all duration-300"
          data-aos="fade-right"
        >
          <div class="flex items-center gap-3 mb-4">
            <UIcon
              name="mdi:eye-outline"
              class="w-6 h-6 text-blue-300"
            />
            <h3 class="text-2xl font-bold text-white">
              Vision
            </h3>
          </div>
          <p class="text-gray-300 leading-relaxed text-lg">
            To be a trusted trading and advisory partner known for honesty, innovation,
            and impactful solutions—helping businesses operate with confidence in a
            fast-changing market environment.
          </p>
        </div>

        <div
          class="p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl text-left
                 hover:border-blue-300/40 hover:-translate-y-1 transition-all duration-300"
          data-aos="fade-left"
        >
          <div class="flex items-center gap-3 mb-4">
            <UIcon
              name="mdi:target-variant"
              class="w-6 h-6 text-blue-300"
            />
            <h3 class="text-2xl font-bold text-white">
              Mission
            </h3>
          </div>

          <ul class="space-y-3 text-gray-300 text-lg leading-relaxed">
            <li>• Provide effective and reliable trading services.</li>
            <li>• Deliver strategic advisory that leads to better business decisions.</li>
            <li>• Build relationships based on trust, clarity, and long-term value.</li>
            <li>• Support clients through relevant insights and strong execution.</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
