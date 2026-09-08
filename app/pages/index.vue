<template>
  <main>
    <!-- Hero -->
    <section
      id="home"
      class="relative min-h-screen overflow-hidden bg-gray-950"
    >
      <!-- Hero background -->
      <HeroBackground />

      <!-- Header -->
      <AppHeader />

      <!-- Hero content -->
      <HeroContent />
    </section>

    <!-- Expertise -->
    <ExpertiseSection />
  </main>
</template>

<script setup lang="ts">
import ExpertiseSection from '~/components/sections/ExpertiseSection.vue'

useSeoMeta({
  title: 'Aziz Gaou — Senior Full Stack Developer',
  description:
    'Senior Full Stack Developer with 10+ years of experience in PHP, Python and Nuxt.js. Expertise in web architecture, APIs, e-commerce, automation and business applications.',
  ogTitle: 'Aziz Gaou — Senior Full Stack Developer',
  ogDescription: 'Senior Full Stack Developer with 10+ years of experience in PHP, Python and Nuxt.js. Expertise in web architecture, APIs, e-commerce, automation and business applications.',
  ogType: 'website',
  ogUrl: 'https://gaou.info'
})
</script>
