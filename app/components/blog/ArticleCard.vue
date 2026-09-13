<template>
  <article
    class="group overflow-hidden rounded-2xl border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
  >
    <NuxtLink :to="`/blog/${slug}`">
      <!-- Image -->
      <div class="relative aspect-[16/9] overflow-hidden bg-gray-100">
        <img
          v-if="featuredImage"
          :src="featuredImage"
          :alt="title"
          class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        >

        <div
          v-else
          class="flex h-full items-center justify-center bg-gray-950"
        >
          <UIcon
            name="i-lucide-file-text"
            class="h-12 w-12 text-white/30"
          />
        </div>

        <div class="absolute left-4 top-4">
          <span
            class="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-gray-800 backdrop-blur"
          >
            {{ category }}
          </span>
        </div>
      </div>

      <!-- Content -->
      <div class="p-6">
        <div class="mb-3 flex items-center gap-3 text-sm text-gray-500">
          <span>{{ publishedAt }}</span>
        </div>

        <h2
          class="text-xl font-bold tracking-tight text-gray-900 transition-colors group-hover:text-gray-600"
        >
          {{ title }}
        </h2>

        <p class="mt-3 line-clamp-3 text-sm leading-6 text-gray-600">
          {{ excerpt }}
        </p>

        <div
          class="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-gray-900"
        >
          Lire l'article

          <UIcon
            name="i-lucide-arrow-right"
            class="h-4 w-4 transition-transform group-hover:translate-x-1"
          />
        </div>
      </div>
    </NuxtLink>
  </article>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  slug: string
  excerpt: string
  publishedAt: string
  category: string
  featuredImage?: string
}>()
</script>
