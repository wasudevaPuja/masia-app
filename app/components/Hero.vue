<template>
  <section
    id="hero"
    class="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0B1E35]"
  >
    <div
      class="absolute inset-0
         bg-[linear-gradient(140deg,#071629_0%,#0B1E35_40%,#0E2348_70%,#103A70_100%)]"
    />

    <div
      class="absolute top-[35%] left-1/2 -translate-x-1/2
         w-[900px] h-[900px]
         bg-[radial-gradient(circle,rgba(72,139,255,0.45),rgba(72,139,255,0.05),transparent)]
         blur-[90px] opacity-70 pointer-events-none"
    />

    <div
      class="absolute bottom-[-120px] left-1/2 -translate-x-1/2
         w-[1400px] h-[600px]
         bg-[radial-gradient(circle_at_bottom,rgba(0,119,255,0.45),transparent_70%)]
         blur-[160px] opacity-80"
    />

    <div
      class="absolute inset-0
         bg-[radial-gradient(circle,transparent_55%,rgba(0,0,0,0.55)_100%)]"
    />

    <div
      class="absolute inset-0 opacity-[0.07] pointer-events-none"
      style="background-image:url('data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'300\' height=\'300\'><filter id=\'n\'><feTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'5\'/></filter><rect width=\'100%\' height=\'100%\' filter=\'url(%23n)\'/></svg>');"
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
                 transition-all duration-300 active:scale-[0.98] cursor-pointer"
          @click="scrollTo('about')"
        >
          Learn More
        </button>

        <button
          class="px-7 py-3 border border-white/40 text-white rounded-xl font-medium
                 hover:bg-white/10 transition-all duration-200 cursor-pointer"
          @click="scrollTo('contact')"
        >
          Contact Us
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
const scrollTo = (id) => {
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}
</script>
