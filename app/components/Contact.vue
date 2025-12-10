<template>
  <section
    id="contact"
    class="relative py-28 bg-[#0B1E35] text-gray-200"
  >
    <div class="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20">
      <div data-aos="fade-right">
        <p class="uppercase tracking-[0.25em] text-blue-300/80 text-xs font-semibold mb-4">
          Get In Touch
        </p>

        <h2 class="flex items-center gap-3 text-4xl md:text-5xl font-bold text-white mb-6">
          <UIcon
            name="mdi:email-fast-outline"
            class="w-7 h-7 text-blue-300"
          />
          <span>Contact Us</span>
        </h2>

        <p class="text-lg text-gray-300 leading-relaxed mb-6">
          We're ready to support your business needs with clarity and efficiency.
        </p>

        <ul class="space-y-4 text-lg text-gray-300">
          <li>📍 15-13A, Wisma UOA 2, Jalan Pinang, Kuala Lumpur</li>
          <li>✉️ finance@masiaglobal.asia</li>
        </ul>
      </div>

      <div
        class="p-10 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-xl shadow-lg"
        data-aos="fade-left"
      >
        <form class="space-y-6">
          <input
            type="text"
            placeholder="Your Name"
            class="w-full px-4 py-3 bg-white/10 text-white border border-white/20 rounded-xl
                   placeholder-gray-400 focus:border-blue-300 focus:ring-0 focus:outline-none transition"
          >

          <input
            type="email"
            placeholder="Your Email"
            class="w-full px-4 py-3 bg-white/10 text-white border border-white/20 rounded-xl
                   placeholder-gray-400 focus:border-blue-300 focus:ring-0 focus:outline-none transition"
          >

          <textarea
            placeholder="Your Message"
            class="w-full h-32 px-4 py-3 bg-white/10 text-white border border-white/20 rounded-xl
                   placeholder-gray-400 focus:border-blue-300 focus:ring-0 focus:outline-none transition"
          />

          <button
            type="submit"
            class="w-full px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-xl font-medium shadow-md transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
// No script needed
</script>
