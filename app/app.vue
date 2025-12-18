<script setup lang="ts">
useHead({
  script: [
    {
      src: 'https://www.googletagmanager.com/gtag/js?id=G-NJ7LBE7BEM',
      async: true
    },
    {
      innerHTML: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-NJ7LBE7BEM');
      `,
      type: 'text/javascript'
    }
  ],
  link: [
    {
      rel: 'canonical',
      href: 'https://www.masiaglobal.asia'
    }
  ]
})
</script>

<template>
  <div>
    <Navbar />

    <main>
      <NuxtPage />
      <FloatingButtons />
    </main>

    <Footer />
  </div>
</template>
