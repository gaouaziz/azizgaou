<template>
  <article
    class="group flex h-full flex-col overflow-hidden rounded-3xl
           border border-gray-200 bg-white
           transition duration-300
           hover:-translate-y-1 hover:shadow-xl"
  >
    <!-- Visual -->
    <div
      class="relative flex h-56 items-center justify-center overflow-hidden
             bg-gray-950"
    >
      <div
        class="absolute inset-0 bg-gradient-to-br from-gray-900
               via-gray-950 to-black"
      />

      <div
        class="absolute -right-20 -top-20 h-48 w-48 rounded-full
               bg-white/5 blur-3xl"
      />

      <div class="relative text-center">
        <UIcon
          :name="icon"
          class="mx-auto h-12 w-12 text-white/80"
        />

        <p class="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
          {{ category }}
        </p>
      </div>
    </div>

    <!-- Content -->
    <div class="flex flex-1 flex-col p-8">

      <div class="flex items-start justify-between gap-4">
        <div>
          <p class="text-sm font-medium text-primary">
            {{ company }}
          </p>

          <h3 class="mt-2 text-2xl font-bold tracking-tight text-gray-900">
            {{ title }}
          </h3>
        </div>

        <span
          v-if="featured"
          class="shrink-0 rounded-full bg-gray-100 px-3 py-1 text-xs
                 font-medium text-gray-500"
        >
          Featured
        </span>
      </div>

      <p class="mt-5 leading-7 text-gray-600">
        {{ description }}
      </p>

      <!-- Technologies -->
      <div class="mt-6 flex flex-wrap gap-2">
        <span
          v-for="technology in technologies"
          :key="technology"
          class="rounded-full bg-gray-100 px-3 py-1 text-xs
                 font-medium text-gray-600"
        >
          {{ technology }}
        </span>
      </div>

      <!-- Footer -->
      <div class="mt-auto pt-8">
        <a
          v-if="link"
          :href="link"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 text-sm font-semibold
                 text-gray-900 transition hover:text-primary"
        >
          Voir le projet

          <UIcon
            name="i-lucide-arrow-up-right"
            class="h-4 w-4 transition-transform
                   group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </a>

        <span
          v-else
          class="inline-flex items-center gap-2 text-sm font-semibold
                 text-gray-400"
        >
          Projet interne

          <UIcon
            name="i-lucide-lock"
            class="h-4 w-4"
          />
        </span>
      </div>

    </div>
  </article>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  company: string
  category: string
  description: string
  technologies: string[]
  icon: string
  link?: string
  featured?: boolean
}>()
</script>
