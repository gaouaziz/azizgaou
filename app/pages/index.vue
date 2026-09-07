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
</script>
