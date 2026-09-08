<template>
  <section class="relative overflow-hidden bg-white py-24 sm:py-32">
    <!-- Decorative background -->
    <div
      class="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-gray-100 blur-3xl"
    />

    <div
      class="pointer-events-none absolute -left-40 bottom-20 h-96 w-96 rounded-full bg-gray-100 blur-3xl"
    />

    <div class="relative mx-auto max-w-7xl px-6 lg:px-8">
      <!-- Heading -->
      <div class="max-w-3xl">
        <div class="flex items-center gap-3">
          <span class="h-px w-10 bg-primary" />

          <p
            class="text-sm font-semibold uppercase tracking-[0.2em] text-primary"
          >
            Expérience
          </p>
        </div>

        <h2
          class="mt-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl"
        >
          Plus de 10 ans à construire
          <span class="text-gray-400">des solutions métier.</span>
        </h2>

        <p class="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
          Un parcours qui m'a permis d'évoluer du développement d'applications
          vers la conception de solutions techniques et d'architectures
          adaptées aux besoins métier.
        </p>
      </div>

      <!-- Timeline -->
      <div class="mt-20">
        <!-- Flyer.be -->
        <article class="relative border-l border-gray-200 pb-16 pl-8 sm:pl-12">
          <div
            class="absolute -left-[9px] top-1 h-4 w-4 rounded-full border-4 border-white bg-primary shadow"
          />

          <div
            class="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between"
          >
            <div>
              <p class="text-sm font-medium text-primary">
                Septembre 2022 — Présent
              </p>

              <h3 class="mt-2 text-2xl font-bold text-gray-900">
                Flyer.be — The Original
              </h3>

              <p class="mt-1 text-base font-medium text-gray-500">
                Senior Full Stack Developer
              </p>
            </div>
          </div>

          <div class="mt-6 max-w-4xl">
            <p class="leading-7 text-gray-600">
              Maintenance et évolution d'une plateforme e-commerce
              d'impression développée avec Mezzio, basée sur une architecture
              CQRS, Event Sourcing et Process Manager.
            </p>

            <p class="mt-4 leading-7 text-gray-600">
              Développement de fonctionnalités métier, intégration de
              partenaires externes, automatisation de processus et
              développement de services backend en Python.
            </p>

            <div class="mt-6 flex flex-wrap gap-2">
              <span class="tag">PHP</span>
              <span class="tag">Mezzio</span>
              <span class="tag">CQRS</span>
              <span class="tag">Event Sourcing</span>
              <span class="tag">Prooph</span>
              <span class="tag">Python</span>
              <span class="tag">FastAPI</span>
              <span class="tag">Playwright</span>
              <span class="tag">Docker</span>
            </div>
          </div>
        </article>

        <!-- Hsabati -->
        <article class="relative border-l border-gray-200 pb-16 pl-8 sm:pl-12">
          <div
            class="absolute -left-[9px] top-1 h-4 w-4 rounded-full border-4 border-white bg-gray-400"
          />

          <div>
            <p class="text-sm font-medium text-primary">
              Avril 2021 — Septembre 2022
            </p>

            <h3 class="mt-2 text-2xl font-bold text-gray-900">
              Hsabati
            </h3>

            <p class="mt-1 text-base font-medium text-gray-500">
              Full Stack Developer
            </p>
          </div>

          <div class="mt-6 max-w-4xl">
            <p class="leading-7 text-gray-600">
              Développement et évolution de solutions web répondant à des
              besoins métier, avec une attention particulière portée à la
              conception backend, aux APIs et à l'intégration des différents
              composants applicatifs.
            </p>

            <div class="mt-6 flex flex-wrap gap-2">
              <span class="tag">PHP</span>
              <span class="tag">Python</span>
              <span class="tag">JavaScript</span>
              <span class="tag">APIs</span>
              <span class="tag">MySQL</span>
            </div>
          </div>
        </article>

        <!-- Freelance -->
        <article class="relative border-l border-gray-200 pb-16 pl-8 sm:pl-12">
          <div
            class="absolute -left-[9px] top-1 h-4 w-4 rounded-full border-4 border-white bg-gray-400"
          />

          <div>
            <p class="text-sm font-medium text-primary">
              Août 2020 — Mars 2021
            </p>

            <h3 class="mt-2 text-2xl font-bold text-gray-900">
              Freelance
            </h3>

            <p class="mt-1 text-base font-medium text-gray-500">
              Développeur Full Stack
            </p>
          </div>

          <div class="mt-6 max-w-4xl">
            <p class="leading-7 text-gray-600">
              Réalisation de projets web et accompagnement technique,
              de l'analyse des besoins jusqu'au développement et à la mise
              en œuvre des solutions.
            </p>

            <div class="mt-6 flex flex-wrap gap-2">
              <span class="tag">PHP</span>
              <span class="tag">Python</span>
              <span class="tag">JavaScript</span>
              <span class="tag">APIs</span>
              <span class="tag">Linux</span>
            </div>
          </div>
        </article>

        <!-- bnet -->
        <article class="relative border-l border-gray-200 pl-8 sm:pl-12">
          <div
            class="absolute -left-[9px] top-1 h-4 w-4 rounded-full border-4 border-white bg-gray-400"
          />

          <div>
            <p class="text-sm font-medium text-primary">
              Mai 2008 — Juillet 2020
            </p>

            <h3 class="mt-2 text-2xl font-bold text-gray-900">
              bnet Technologies
            </h3>

            <p class="mt-1 text-base font-medium text-gray-500">
              Développeur Web / Full Stack
            </p>
          </div>

          <div class="mt-6 max-w-4xl">
            <p class="leading-7 text-gray-600">
              Développement de nombreuses applications web et solutions
              métier, avec une évolution progressive vers des problématiques
              de backend, d'architecture, de bases de données et
              d'intégration de systèmes.
            </p>

            <div class="mt-6 flex flex-wrap gap-2">
              <span class="tag">PHP</span>
              <span class="tag">CodeIgniter</span>
              <span class="tag">Zend Framework</span>
              <span class="tag">Java</span>
              <span class="tag">MySQL</span>
              <span class="tag">SQL Server</span>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.tag {
  @reference "tailwindcss";
  @apply rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600;
}
</style>
