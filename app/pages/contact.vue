<template>
  <main>
    <!-- Hero -->
    <section class="relative overflow-hidden bg-gray-950">
      <!-- Header -->
      <AppHeader />
      <div
        class="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800"
      />

      <div class="relative mx-auto max-w-7xl px-6 py-28 lg:px-8 lg:py-36">
        <div class="max-w-3xl">
          <p
            class="mb-4 text-sm font-semibold uppercase tracking-widest text-gray-400"
          >
            Contact
          </p>

          <h1
            class="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            Parlons de votre
            <span class="text-gray-400">projet.</span>
          </h1>

          <p class="mt-6 max-w-2xl text-lg leading-8 text-gray-300">
            Vous avez un projet, une problématique technique ou une nouvelle
            opportunité professionnelle ? Je serais ravi d'échanger avec vous.
          </p>
        </div>
      </div>
    </section>

    <!-- Contact -->
    <section class="bg-white">
      <div class="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        <div class="grid gap-16 lg:grid-cols-2">
          <!-- Left -->
          <div>
            <p
              class="text-sm font-semibold uppercase tracking-widest text-gray-400"
            >
              Restons en contact
            </p>

            <h2
              class="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
            >
              Une idée à concrétiser ?
            </h2>

            <p class="mt-6 max-w-xl text-base leading-7 text-gray-600">
              Je suis particulièrement intéressé par les projets qui
              nécessitent de comprendre un besoin métier, concevoir une
              solution technique adaptée et construire une application
              durable.
            </p>

            <div class="mt-10 space-y-4">
              <a
                v-for="link in contactLinks"
                :key="link.label"
                :href="link.href"
                target="_blank"
                rel="noopener noreferrer"
                class="group flex items-center justify-between rounded-2xl border border-gray-200 p-5 transition hover:border-gray-400 hover:bg-gray-50"
              >
                <div>
                  <p class="text-sm font-medium text-gray-400">
                    {{ link.label }}
                  </p>

                  <p class="mt-1 font-semibold text-gray-900">
                    {{ link.value }}
                  </p>
                </div>

                <span
                  class="text-gray-400 transition-transform group-hover:translate-x-1"
                >
                  →
                </span>
              </a>
            </div>
          </div>

          <!-- Right -->
          <div class="rounded-3xl bg-gray-950 p-8 lg:p-10">
            <p
              class="text-sm font-semibold uppercase tracking-widest text-gray-500"
            >
              Échangeons
            </p>

            <h2 class="mt-3 text-2xl font-bold text-white">
              Me contacter directement
            </h2>

            <p class="mt-5 leading-7 text-gray-400">
              Pour une prise de contact professionnelle, le moyen le plus
              simple est de m'envoyer un email.
            </p>

            <a
              href="mailto:aziz@gaou.info"
              class="mt-8 inline-flex w-full items-center justify-center rounded-full bg-white px-6 py-4 text-sm font-semibold text-gray-900 transition hover:bg-gray-200"
            >
              Envoyer un email
            </a>

            <div class="mt-10 border-t border-gray-800 pt-8">
              <p class="text-sm text-gray-500">
                Disponible pour discuter de :
              </p>

              <ul class="mt-4 space-y-3 text-sm text-gray-300">
                <li>→ Opportunités Full Stack / Backend</li>
                <li>→ Architecture et évolution de plateformes web</li>
                <li>→ APIs et intégration de systèmes</li>
                <li>→ Automatisation de processus métier</li>
                <li>→ Projets web nécessitant une expertise technique</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Contact — Aziz Gaou',
  description:
    'Contact Aziz Gaou, Senior Full Stack Developer, for professional opportunities, web projects, technical architecture, APIs and automation.'
})
const contactLinks = [
  {
    label: 'Email',
    value: 'aziz@gaou.info',
    href: 'mailto:aziz@gaou.info'
  },
  {
    label: 'LinkedIn',
    value: 'Mon profil LinkedIn',
    href: 'https://www.linkedin.com/in/aziz-gaou/'
  }
]
</script>
