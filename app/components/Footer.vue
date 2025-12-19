<template>
  <footer class="relative bg-[#0B1E35] text-gray-300 border-t border-white/10 overflow-hidden">
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute right-0 top-0 w-[380px] h-[380px] bg-blue-500/10 rounded-full blur-3xl" />
      <div class="absolute left-0 bottom-0 w-[260px] h-[260px] bg-blue-400/10 rounded-full blur-3xl" />
    </div>

    <div class="relative max-w-7xl mx-auto px-6 py-20 grid gap-14 sm:grid-cols-2 md:grid-cols-4">
      <div class="flex flex-col items-center text-center">
        <div
          class="w-28 h-28 rounded-full bg-white
           shadow-xl flex items-center justify-center mb-6"
        >
          <img
            src="/img/logo-v2.png"
            alt="Masia Global Trade Logo"
            class="w-full h-full object-contain p-3"
          >
        </div>

        <p class="text-gray-400 text-sm leading-relaxed max-w-xs">
          We help businesses move smarter—not just further.
        </p>
      </div>

      <div>
        <h4 class="text-white font-semibold mb-5">
          Quick Links
        </h4>

        <ul class="space-y-3 text-sm">
          <li>
            <span
              class="cursor-pointer hover:text-blue-300 transition"
              @click="scrollTo('hero')"
            >Home</span>
          </li>
          <li>
            <span
              class="cursor-pointer hover:text-blue-300 transition"
              @click="scrollTo('about')"
            >About Us</span>
          </li>
          <li>
            <span
              class="cursor-pointer hover:text-blue-300 transition"
              @click="scrollTo('services')"
            >Services</span>
          </li>
          <li>
            <span
              class="cursor-pointer hover:text-blue-300 transition"
              @click="scrollTo('why')"
            >Why Work With Us</span>
          </li>
          <li>
            <span
              class="cursor-pointer hover:text-blue-300 transition"
              @click="scrollTo('partners')"
            >Our Partners</span>
          </li>
          <li>
            <span
              class="cursor-pointer hover:text-blue-300 transition"
              @click="scrollTo('contact')"
            >Contact</span>
          </li>
        </ul>
      </div>

      <div>
        <h4 class="text-white font-semibold mb-5">
          Company Info
        </h4>

        <p class="text-gray-400 text-sm leading-relaxed text-justify">
          <span class="text-white font-medium">MASIA GLOBAL TRADE SDN. BHD.</span><br>
          15-13A, Wisma UOA 2,<br>
          Jalan Pinang,<br>
          50450 Kuala Lumpur,<br>
          W.P. Kuala Lumpur, Malaysia
        </p>

        <p class="mt-4 text-xs text-gray-500">
          Registered in Malaysia
        </p>
      </div>

      <div>
        <h4 class="text-white font-semibold mb-5">
          Contact
        </h4>

        <p class="text-sm mb-4">
          <span class="text-white font-medium">Email:</span><br>
          <a
            href="mailto:office.masiaglobal@gmail.com"
            class="text-gray-300 hover:text-blue-300 underline underline-offset-2 transition"
          >
            office.masiaglobal@gmail.com
          </a>
        </p>

        <p class="text-sm mb-4">
          <span class="text-white font-medium">Phone:</span><br>
          +60 19-586 38773
        </p>
      </div>
    </div>

    <div class="relative text-center text-white text-sm border-t border-white/10 py-6">
      Copyright © 2025 Masia Global Trade SDN. BHD. [202401048370 (1594215-T)] All rights reserved.
    </div>
  </footer>
</template>

<script setup>
const scrollTo = (id) => {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}
</script>
