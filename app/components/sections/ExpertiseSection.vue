<template>
  <section
    id="expertise"
    class="relative overflow-hidden bg-white py-24 sm:py-32"
  >
    <!-- Decorative background -->
    <div
      class="pointer-events-none absolute -right-40 top-20
             h-96 w-96 rounded-full bg-primary/5 blur-3xl"
    />

    <div
      class="pointer-events-none absolute -left-40 bottom-20
             h-96 w-96 rounded-full bg-gray-100 blur-3xl"
    />

    <div class="relative mx-auto max-w-7xl px-6 lg:px-8">
      <!-- Heading -->
      <div class="max-w-3xl">
        <div class="flex items-center gap-3">
          <span class="h-px w-10 bg-primary" />

          <p
            class="text-sm font-semibold uppercase
                   tracking-[0.2em] text-primary"
          >
            Expertise
          </p>
        </div>

        <h2
          class="mt-6 text-4xl font-bold tracking-tight text-gray-900
                 sm:text-5xl"
        >
          Des solutions pensées
          <span class="text-gray-400">pour le métier.</span>
        </h2>

        <p
          class="mt-6 max-w-2xl text-lg leading-8 text-gray-600"
        >
          Mon approche ne se limite pas au développement.
          Je pars du besoin métier pour analyser les processus,
          concevoir l'architecture et mettre en place une solution
          technique adaptée.
        </p>
      </div>

      <!-- Expertise cards -->
      <div
        class="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
      >
        <!-- Architecture -->
        <article
          class="group relative overflow-hidden rounded-3xl
                 border border-gray-200 bg-white p-8
                 transition duration-300
                 hover:-translate-y-1 hover:shadow-xl"
        >
          <div
            class="flex h-14 w-14 items-center justify-center
                   rounded-2xl bg-primary/10 text-primary
                   transition group-hover:bg-primary
                   group-hover:text-white"
          >
            <UIcon
              name="i-lucide-layers-3"
              class="h-7 w-7"
            />
          </div>

          <h3 class="mt-2 text-xl font-semibold text-gray-900">
            Architecture
          </h3>

          <p class="mt-3 leading-7 text-gray-600">
            Concevoir des architectures capables d'accompagner
            la complexité et l'évolution des applications métier.
          </p>

          <div class="mt-6 flex flex-wrap gap-2">
            <span class="tag">CQRS</span>
            <span class="tag">Event Sourcing</span>
            <span class="tag">Process Manager</span>
            <span class="tag">Prooph</span>
          </div>
        </article>

        <!-- Backend -->
        <article
          class="group relative overflow-hidden rounded-3xl
                 border border-gray-200 bg-white p-8
                 transition duration-300
                 hover:-translate-y-1 hover:shadow-xl"
        >
          <div
            class="flex h-14 w-14 items-center justify-center
                   rounded-2xl bg-primary/10 text-primary
                   transition group-hover:bg-primary
                   group-hover:text-white"
          >
            <UIcon
              name="i-lucide-server"
              class="h-7 w-7"
            />
          </div>

          <h3 class="mt-2 text-xl font-semibold text-gray-900">
            Backend & APIs
          </h3>

          <p class="mt-3 leading-7 text-gray-600">
            Développer des services backend robustes et des APIs
            capables de connecter les différents composants
            d'un système.
          </p>

          <div class="mt-6 flex flex-wrap gap-2">
            <span class="tag">PHP</span>
            <span class="tag">Python</span>
            <span class="tag">Mezzio</span>
            <span class="tag">FastAPI</span>
            <span class="tag">REST</span>
          </div>
        </article>

        <!-- Full Stack -->
        <article
          class="group relative overflow-hidden rounded-3xl
                 border border-gray-200 bg-white p-8
                 transition duration-300
                 hover:-translate-y-1 hover:shadow-xl"
        >
          <div
            class="flex h-14 w-14 items-center justify-center
                   rounded-2xl bg-primary/10 text-primary
                   transition group-hover:bg-primary
                   group-hover:text-white"
          >
            <UIcon
              name="i-lucide-monitor"
              class="h-7 w-7"
            />
          </div>

          <h3 class="mt-2 text-xl font-semibold text-gray-900">
            Full Stack
          </h3>

          <p class="mt-3 leading-7 text-gray-600">
            Concevoir des interfaces modernes et les connecter
            efficacement aux services backend et aux APIs.
          </p>

          <div class="mt-6 flex flex-wrap gap-2">
            <span class="tag">Nuxt.js</span>
            <span class="tag">Vue.js</span>
            <span class="tag">JavaScript</span>
            <span class="tag">Tailwind CSS</span>
          </div>
        </article>

        <!-- Integrations -->
        <article
          class="group relative overflow-hidden rounded-3xl
                 border border-gray-200 bg-white p-8
                 transition duration-300
                 hover:-translate-y-1 hover:shadow-xl"
        >
          <div
            class="flex h-14 w-14 items-center justify-center
                   rounded-2xl bg-primary/10 text-primary
                   transition group-hover:bg-primary
                   group-hover:text-white"
          >
            <UIcon
              name="i-lucide-plug-zap"
              class="h-7 w-7"
            />
          </div>

          <h3 class="mt-2 text-xl font-semibold text-gray-900">
            Intégration
          </h3>

          <p class="mt-3 leading-7 text-gray-600">
            Connecter des systèmes externes et automatiser
            des processus métier complexes afin de réduire
            les traitements manuels.
          </p>

          <div class="mt-6 flex flex-wrap gap-2">
            <span class="tag">APIs externes</span>
            <span class="tag">Playwright</span>
            <span class="tag">Selenium</span>
            <span class="tag">CLI</span>
          </div>
        </article>

        <!-- Data -->
        <article
          class="group relative overflow-hidden rounded-3xl
                 border border-gray-200 bg-white p-8
                 transition duration-300
                 hover:-translate-y-1 hover:shadow-xl"
        >
          <div
            class="flex h-14 w-14 items-center justify-center
                   rounded-2xl bg-primary/10 text-primary
                   transition group-hover:bg-primary
                   group-hover:text-white"
          >
            <UIcon
              name="i-lucide-database"
              class="h-7 w-7"
            />
          </div>

          <h3 class="mt-2 text-xl font-semibold text-gray-900">
            Data
          </h3>

          <p class="mt-3 leading-7 text-gray-600">
            Travailler avec différents modèles de données et
            choisir les solutions de persistance adaptées
            aux besoins de l'application.
          </p>

          <div class="mt-6 flex flex-wrap gap-2">
            <span class="tag">PostgreSQL</span>
            <span class="tag">MySQL</span>
            <span class="tag">MongoDB</span>
            <span class="tag">SQL Server</span>
          </div>
        </article>

        <!-- Cloud -->
        <article
          class="group relative overflow-hidden rounded-3xl
                 border border-gray-200 bg-white p-8
                 transition duration-300
                 hover:-translate-y-1 hover:shadow-xl"
        >
          <div
            class="flex h-14 w-14 items-center justify-center
                   rounded-2xl bg-primary/10 text-primary
                   transition group-hover:bg-primary
                   group-hover:text-white"
          >
            <UIcon
              name="i-lucide-cloud-cog"
              class="h-7 w-7"
            />
          </div>

          <h3 class="mt-2 text-xl font-semibold text-gray-900">
            Cloud & DevOps
          </h3>

          <p class="mt-3 leading-7 text-gray-600">
            Déployer et maintenir les applications dans des
            environnements cloud et Linux avec une approche
            orientée automatisation.
          </p>

          <div class="mt-6 flex flex-wrap gap-2">
            <span class="tag">Docker</span>
            <span class="tag">AWS</span>
            <span class="tag">DigitalOcean</span>
            <span class="tag">Linux</span>
            <span class="tag">Nginx</span>
            <span class="tag">Git</span>
          </div>
        </article>
      </div>

      <!-- Approach -->
      <div
        class="mt-20 overflow-hidden rounded-3xl bg-gray-950"
      >
        <div
          class="grid items-center gap-10 px-8 py-10
                 lg:grid-cols-[1fr_auto] lg:px-12 lg:py-12"
        >
          <div>
            <p
              class="text-sm font-semibold uppercase
                     tracking-[0.2em] text-primary-400"
            >
              Mon approche
            </p>

            <h3
              class="mt-3 text-2xl font-bold text-white sm:text-3xl"
            >
              Du besoin métier à la solution technique.
            </h3>

            <p
              class="mt-4 max-w-2xl leading-7 text-gray-400"
            >
              Comprendre le problème avant de choisir la technologie.
              Chaque solution doit répondre à un besoin concret,
              rester maintenable et pouvoir évoluer avec le projet.
            </p>
          </div>

          <!-- Process -->
          <div
            class="flex flex-wrap items-center gap-3
                   text-sm font-medium"
          >
            <span class="process-step">
              Besoin
            </span>

            <span class="text-gray-600">→</span>

            <span class="process-step">
              Analyse
            </span>

            <span class="text-gray-600">→</span>

            <span class="process-step">
              Architecture
            </span>

            <span class="text-gray-600">→</span>

            <span class="process-step">
              Solution
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
