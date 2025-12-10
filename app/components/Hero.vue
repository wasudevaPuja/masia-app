<template>
  <section
    id="hero"
    class="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0B1E35]"
  >
    <div class="absolute inset-0 bg-gradient-to-b from-[#0B1E35] to-[#071629] opacity-90" />

    <div
      class="absolute inset-0 bg-[url('/img/76811.jpg')] bg-center bg-cover opacity-[0.22]"
      style="
    filter: brightness(0.55) saturate(0.35) hue-rotate(190deg) contrast(1.15);
    mix-blend-mode: screen;
  "
    />

    <div
      class="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px]
         bg-blue-400/25 blur-[160px] opacity-40"
    />

    <div
      class="relative z-10 max-w-5xl mx-auto text-center px-6"
      data-aos="fade-up"
    >
      <p class="uppercase tracking-[0.25em] text-blue-300/80 text-xs md:text-sm font-semibold mb-6">
        Strategic Trading & Advisory
      </p>

      <h1
        class="text-white font-extrabold leading-[1.15] text-4xl sm:text-5xl md:text-6xl lg:text-[4.2rem] drop-shadow-sm"
      >
        Trade. Strategy. <br class="hidden md:block">
        Partnership. <span class="text-blue-300">Elevated.</span>
      </h1>

      <p
        class="mt-6 text-gray-300 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto"
        data-aos="fade-up"
        data-aos-delay="150"
      >
        We help businesses move smarter—not just further.
        Connecting opportunities, enhancing trading performance,
        and delivering long-term strategic clarity.
      </p>

      <div
        class="mt-10 flex flex-wrap justify-center gap-4"
        data-aos="zoom-in"
        data-aos-delay="300"
      >
        <button
          class="px-7 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-xl
                 font-medium shadow-[0_8px_30px_-4px_rgba(59,130,246,0.3)]
                 transition-all duration-300 active:scale-[0.98]"
          @click="$emit('scrollTo', 'about')"
        >
          Learn More
        </button>

        <button
          class="px-7 py-3 border border-white/40 text-white rounded-xl font-medium
                 hover:bg-white/10 transition-all duration-200"
          @click="$emit('scrollTo', 'contact')"
        >
          Contact Us
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
// No script needed
</script>
