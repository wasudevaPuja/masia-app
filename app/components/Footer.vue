<template>
  <footer class="relative bg-[#0B1E35] text-gray-300 pt-20 pb-12 border-t border-white/10 overflow-hidden">
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute right-0 top-0 w-[380px] h-[380px] bg-blue-500/10 rounded-full blur-3xl" />
      <div class="absolute left-0 bottom-0 w-[260px] h-[260px] bg-blue-400/10 rounded-full blur-3xl" />
    </div>

    <div class="relative max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-14">
      <div>
        <h3 class="text-white text-2xl font-semibold tracking-wide mb-4">
          MASIA TRADE SDN. BHD.
        </h3>

        <p class="text-gray-400 text-sm leading-relaxed">
          15-13A, Wisma UOA 2, Jalan Pinang,<br>
          50450 Kuala Lumpur, W.P. Kuala Lumpur, Malaysia
        </p>

        <p class="mt-4 text-sm">
          <span class="text-white font-medium">Email:</span>
          <a
            href="mailto:finance@masiaglobal.asia"
            class="text-gray-300 hover:text-blue-300 transition underline underline-offset-2"
          >
            finance@masiaglobal.asia
          </a>
        </p>
      </div>

      <div>
        <h3 class="text-white text-lg font-semibold mb-4">
          Quick Links
        </h3>

        <ul class="space-y-2 text-sm">
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
              @click="scrollTo('contact')"
            >Contact</span>
          </li>
        </ul>
      </div>

      <div>
        <h4 class="text-white text-lg font-semibold mb-4">
          Contact Us
        </h4>

        <p class="text-gray-400 text-sm leading-relaxed mb-4">
          Reach us instantly via WhatsApp.
        </p>

        <a
          href="https://wa.me/628213613126?text=Hello%20Advance%20Trading%20Technology"
          target="_blank"
          class="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-full transition shadow-lg shadow-green-900/20"
        >
          <UIcon
            name="mdi:whatsapp"
            class="w-5 h-5"
          />
          <span class="font-medium">WhatsApp Us</span>
        </a>

        <div class="flex items-center gap-4 mt-6">
          <a
            href="#"
            class="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center
       text-gray-300 hover:bg-pink-500 hover:text-white transition shadow-sm"
          >
            <UIcon
              name="mdi:instagram"
              class="w-6 h-6"
            />
          </a>

          <a
            href="#"
            class="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center
       text-gray-300 hover:bg-blue-600 hover:text-white transition shadow-sm"
          >
            <UIcon
              name="mdi:facebook"
              class="w-6 h-6"
            />
          </a>

          <a
            href="#"
            class="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center
       text-gray-300 hover:bg-red-600 hover:text-white transition shadow-sm"
          >
            <UIcon
              name="mdi:youtube"
              class="w-6 h-6"
            />
          </a>

          <a
            href="#"
            class="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center
       text-gray-300 hover:bg-sky-500 hover:text-white transition shadow-sm"
          >
            <UIcon
              name="mdi:telegram"
              class="w-6 h-6"
            />
          </a>
        </div>
      </div>
    </div>

    <div class="relative mt-12 text-center text-gray-500 text-sm border-t border-white/10 pt-6">
      © 2025 MASIA TRADE SDN. BHD. All rights reserved.
    </div>
  </footer>
</template>

<script setup>
const scrollTo = (id) => {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}
</script>
