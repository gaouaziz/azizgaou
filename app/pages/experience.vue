<template>
  <main>
    <!-- Page hero -->
    <section class="relative overflow-hidden bg-gray-950 py-32 sm:py-40">

    <!-- Header -->
    <AppHeader />
      <div
        class="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800"
      />

      <div
        class="absolute -right-40 top-0 h-96 w-96 rounded-full bg-white/5 blur-3xl"
      />

      <div class="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div class="max-w-3xl">

          <p
            class="text-sm font-semibold uppercase tracking-[0.2em] text-primary-400"
          >
            Parcours professionnel
          </p>

          <h1
            class="mt-6 text-5xl font-bold tracking-tight text-white sm:text-6xl"
          >
            Expérience
          </h1>

          <p
            class="mt-6 max-w-2xl text-lg leading-8 text-gray-400"
          >
            Plus de 10 ans d'expérience dans le développement,
            l'intégration et la conception de solutions web orientées métier.
          </p>

        </div>
      </div>
    </section>

    <!-- Timeline -->
    <ExperienceTimeline />
  </main>
</template>
<script setup lang="ts">
import ExperienceTimeline from '~/components/sections/ExperienceTimeline.vue'
</script>
