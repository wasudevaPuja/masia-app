<template>
  <section
    id="contact"
    class="relative py-28 bg-[#0B1E35] text-gray-200"
  >
    <div class="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20">
      <!-- LEFT -->
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

          <li>
            <a
              href="mailto:finance@masiaglobal.asia"
              class="hover:text-blue-300 transition underline underline-offset-2"
            >
              ✉️ finance@masiaglobal.asia
            </a>
          </li>
        </ul>
      </div>

      <!-- RIGHT (FORM) -->
      <div
        class="p-10 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-xl shadow-lg"
        data-aos="fade-left"
      >
        <form
          ref="contactForm"
          class="space-y-6"
          @submit.prevent="submitForm"
        >
          <input
            type="hidden"
            name="access_key"
            value="eee4ad2d-7153-4a81-9610-0d69b1294b0c"
          >

          <input
            v-model="form.name"
            name="name"
            type="text"
            placeholder="Your Name"
            required
            class="w-full px-4 py-3 bg-white/10 text-white border border-white/20 rounded-xl
                   placeholder-gray-400 focus:border-blue-300 transition"
          >

          <input
            v-model="form.email"
            name="email"
            type="email"
            placeholder="Your Email"
            required
            class="w-full px-4 py-3 bg-white/10 text-white border border-white/20 rounded-xl
                   placeholder-gray-400 focus:border-blue-300 transition"
          >

          <textarea
            v-model="form.message"
            name="message"
            placeholder="Your Message"
            required
            class="w-full h-32 px-4 py-3 bg-white/10 text-white border border-white/20 rounded-xl
                   placeholder-gray-400 focus:border-blue-300 transition"
          />

          <button
            type="submit"
            :disabled="loading"
            class="w-full px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-xl font-medium shadow-md transition flex justify-center items-center gap-2 cursor-pointer"
          >
            <span
              v-if="loading"
              class="animate-spin border-2 border-white/40 border-t-white rounded-full w-5 h-5"
            />
            <span>{{ loading ? 'Sending...' : 'Send Message' }}</span>
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import Swal from 'sweetalert2'

const loading = ref(false)
const contactForm = ref(null)

const form = ref({
  name: '',
  email: '',
  message: ''
})

const submitForm = async () => {
  loading.value = true

  const formData = new FormData(contactForm.value)

  try {
    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData
    }).then(r => r.json())

    loading.value = false

    if (res.success) {
      Swal.fire({
        title: 'Message Sent!',
        text: 'Thank you for contacting us. We\'ll get back to you shortly.',
        icon: 'success',
        confirmButtonColor: '#3B82F6'
      })

      contactForm.value.reset()
      form.value = { name: '', email: '', message: '' }

      // Scroll back to Contact section
      document.getElementById('contact')?.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    } else {
      throw new Error('Form submission failed')
    }
  } catch {
    loading.value = false

    Swal.fire({
      title: 'Error',
      text: 'Failed to send your message. Please try again.',
      icon: 'error',
      confirmButtonColor: '#EF4444'
    })
  }
}
</script>
