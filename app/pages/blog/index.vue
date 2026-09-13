<template>
  <main>
    <!-- Hero -->
    <section class="bg-gray-950 px-6 py-24 text-white">
      <!-- Header -->
      <AppHeader />
      <div class="mx-auto max-w-7xl">
        <div class="max-w-3xl">
          <p
            class="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-gray-400"
          >
            Blog
          </p>

          <h1 class="text-4xl font-bold tracking-tight sm:text-5xl">
            Conseils pour réussir en ligne.
          </h1>

          <p class="mt-6 text-lg leading-8 text-gray-400">
            {{ description }}
          </p>
        </div>
      </div>
    </section>

    <!-- Introduction -->
    <section class="bg-white px-6 py-20 dark:bg-gray-950">
      <div class="mx-auto max-w-4xl">
        <div class="grid gap-10 md:grid-cols-[1fr_auto] md:items-start">
          <!-- Text -->
          <div>
            <p
              class="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary-500"
            >
              Perspectives & expériences
            </p>

            <h2
              class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl"
            >
              Des idées, des expériences et des connaissances à partager.
            </h2>

            <div
              class="mt-6 space-y-5 text-lg leading-8 text-gray-600 dark:text-gray-400"
            >
              <p>
                Ce blog est un espace dédié au partage d’expériences,
                de réflexions et de connaissances acquises au fil de mon
                parcours professionnel et personnel.
              </p>

              <p>
                Vous y trouverez des articles consacrés au développement
                web, aux technologies, à l’architecture logicielle, aux
                ERP, aux bases de données, mais également au développement
                personnel et aux méthodes permettant de progresser
                continuellement.
              </p>

              <p>
                L’objectif est simple : partager des idées et des
                expériences concrètes qui peuvent être utiles, aussi bien
                aux développeurs qu’à toute personne souhaitant apprendre,
                évoluer et mieux comprendre les technologies qui façonnent
                notre quotidien.
              </p>
            </div>
          </div>

          <!-- Highlight -->
          <div
            class="hidden rounded-2xl border border-gray-200 bg-gray-50 p-6 md:block dark:border-gray-800 dark:bg-gray-900"
          >
            <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-500/10">
              <UIcon
                name="i-lucide-lightbulb"
                class="h-6 w-6 text-primary-500"
              />
            </div>

            <p
              class="mt-5 max-w-[180px] text-sm font-medium leading-6 text-gray-700 dark:text-gray-300"
            >
              Apprendre, expérimenter, partager et continuer à progresser.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Articles -->
    <section class="bg-gray-50 px-6 py-20">
      <div class="mx-auto max-w-7xl">
        <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <ArticleCard
            v-for="article in articles"
            :key="article.slug"
            v-bind="article"
          />
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import ArticleCard from '~/components/blog/ArticleCard.vue'

const title = 'Blog — Développement, Technologie & Expérience'
const description = 'Réflexions, conseils et retours d’expérience autour du développement web, des technologies, de l’architecture logicielle, des ERP, des bases de données et du développement personnel.'

useSeoMeta({
  title: title,
  description: description
})

const articles = [
  {
    title: 'Améliorer son anglais : les bonnes habitudes pour progresser au quotidien',
    slug: 'comment-ameliorer-son-anglais',
    excerpt:
      'Découvrez des méthodes simples et efficaces pour améliorer votre anglais au quotidien. De la pratique régulière à l’écoute de podcasts et aux conversations, découvrez les bonnes habitudes à adopter pour gagner en confiance et progresser naturellement, avec notamment EasyTalk comme ressource pour pratiquer l’anglais à l’oral.',
    publishedAt: '12 septembre 2026',
    category: 'Développement personnel',
    featuredImage: '/images/blog/easy-talk-card.png'
  }
]
</script>
