<template>
  <section class="relative overflow-hidden bg-white py-24 sm:py-32">
    <!-- Decorative background -->
    <div
      class="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-gray-100 blur-3xl"
    />

    <div
      class="pointer-events-none absolute -left-40 bottom-20 h-96 w-96 rounded-full bg-primary/5 blur-3xl"
    />

    <div class="relative mx-auto max-w-7xl px-6 lg:px-8">
      <!-- Heading -->
      <div class="max-w-3xl">
        <div class="flex items-center gap-3">
          <span class="h-px w-10 bg-primary" />

          <p
            class="text-sm font-semibold uppercase tracking-[0.2em] text-primary"
          >
            Compétences
          </p>
        </div>

        <h2
          class="mt-6 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl"
        >
          Une expertise technique
          <span class="text-gray-400">orientée solution.</span>
        </h2>

        <p class="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
          Un ensemble de compétences acquises à travers des projets web,
          des applications métier, des architectures backend, des intégrations
          et des processus d'automatisation.
        </p>
      </div>

      <!-- Skills -->
      <div class="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <!-- Backend -->
        <article class="skill-card">
          <div class="skill-icon">
            <UIcon
              name="i-lucide-server"
              class="h-6 w-6"
            />
          </div>

          <h3 class="skill-title">
            Backend
          </h3>

          <p class="skill-description">
            Conception et développement de services backend robustes,
            APIs et applications métier.
          </p>

          <div class="skill-tags">
            <span class="tag">PHP</span>
            <span class="tag">Python</span>
            <span class="tag">Mezzio</span>
            <span class="tag">FastAPI</span>
            <span class="tag">CodeIgniter</span>
            <span class="tag">Zend Framework</span>
          </div>
        </article>

        <!-- Architecture -->
        <article class="skill-card">
          <div class="skill-icon">
            <UIcon
              name="i-lucide-layers"
              class="h-6 w-6"
            />
          </div>

          <h3 class="skill-title">
            Architecture
          </h3>

          <p class="skill-description">
            Conception d'architectures adaptées à la complexité et
            à l'évolution des applications métier.
          </p>

          <div class="skill-tags">
            <span class="tag">CQRS</span>
            <span class="tag">Event Sourcing</span>
            <span class="tag">Process Manager</span>
            <span class="tag">Prooph</span>
            <span class="tag">DDD</span>
            <span class="tag">Architecture événementielle</span>
          </div>
        </article>

        <!-- Frontend -->
        <article class="skill-card">
          <div class="skill-icon">
            <UIcon
              name="i-lucide-monitor"
              class="h-6 w-6"
            />
          </div>

          <h3 class="skill-title">
            Frontend
          </h3>

          <p class="skill-description">
            Développement d'interfaces modernes et intégration avec
            les services backend et APIs.
          </p>

          <div class="skill-tags">
            <span class="tag">Nuxt.js</span>
            <span class="tag">Vue.js</span>
            <span class="tag">JavaScript</span>
            <span class="tag">Tailwind CSS</span>
            <span class="tag">HTML</span>
            <span class="tag">CSS</span>
          </div>
        </article>

        <!-- Databases -->
        <article class="skill-card">
          <div class="skill-icon">
            <UIcon
              name="i-lucide-database"
              class="h-6 w-6"
            />
          </div>

          <h3 class="skill-title">
            Bases de données
          </h3>

          <p class="skill-description">
            Modélisation, exploitation et intégration de différents
            systèmes de persistance.
          </p>

          <div class="skill-tags">
            <span class="tag">PostgreSQL</span>
            <span class="tag">MySQL</span>
            <span class="tag">MongoDB</span>
            <span class="tag">SQL Server</span>
            <span class="tag">HBase</span>
            <span class="tag">Solr</span>
          </div>
        </article>

        <!-- APIs & Integration -->
        <article class="skill-card">
          <div class="skill-icon">
            <UIcon
              name="i-lucide-plug"
              class="h-6 w-6"
            />
          </div>

          <h3 class="skill-title">
            APIs & Intégration
          </h3>

          <p class="skill-description">
            Intégration de systèmes externes, échanges de données
            et automatisation de processus métier.
          </p>

          <div class="skill-tags">
            <span class="tag">REST API</span>
            <span class="tag">cURL</span>
            <span class="tag">APIs externes</span>
            <span class="tag">CLI</span>
            <span class="tag">Symfony Console</span>
          </div>
        </article>

        <!-- Automation -->
        <article class="skill-card">
          <div class="skill-icon">
            <UIcon
              name="i-lucide-bot"
              class="h-6 w-6"
            />
          </div>

          <h3 class="skill-title">
            Automatisation
          </h3>

          <p class="skill-description">
            Automatisation de parcours web et de processus métier
            avec des outils adaptés aux besoins.
          </p>

          <div class="skill-tags">
            <span class="tag">Playwright</span>
            <span class="tag">Selenium</span>
            <span class="tag">Python</span>
            <span class="tag">FastAPI</span>
            <span class="tag">Bash</span>
          </div>
        </article>

        <!-- Cloud & DevOps -->
        <article class="skill-card">
          <div class="skill-icon">
            <UIcon
              name="i-lucide-cloud"
              class="h-6 w-6"
            />
          </div>

          <h3 class="skill-title">
            Cloud & DevOps
          </h3>

          <p class="skill-description">
            Déploiement, administration et maintenance d'applications
            dans des environnements Linux et cloud.
          </p>

          <div class="skill-tags">
            <span class="tag">Docker</span>
            <span class="tag">AWS</span>
            <span class="tag">Google Cloud</span>
            <span class="tag">DigitalOcean</span>
            <span class="tag">Linux</span>
            <span class="tag">Nginx</span>
            <span class="tag">Git</span>
          </div>
        </article>

        <!-- Development -->
        <article class="skill-card">
          <div class="skill-icon">
            <UIcon
              name="i-lucide-code-2"
              class="h-6 w-6"
            />
          </div>

          <h3 class="skill-title">
            Développement
          </h3>

          <p class="skill-description">
            Expérience sur différents environnements et technologies
            permettant de choisir l'approche adaptée au contexte.
          </p>

          <div class="skill-tags">
            <span class="tag">PHP</span>
            <span class="tag">Python</span>
            <span class="tag">JavaScript</span>
            <span class="tag">Java</span>
            <span class="tag">J2EE</span>
          </div>
        </article>

        <!-- Engineering -->
        <article class="skill-card">
          <div class="skill-icon">
            <UIcon
              name="i-lucide-settings-2"
              class="h-6 w-6"
            />
          </div>

          <h3 class="skill-title">
            Engineering
          </h3>

          <p class="skill-description">
            Analyse des besoins, conception de solutions, résolution
            de problèmes complexes et évolution d'applications existantes.
          </p>

          <div class="skill-tags">
            <span class="tag">Analyse</span>
            <span class="tag">Architecture</span>
            <span class="tag">API Design</span>
            <span class="tag">Refactoring</span>
            <span class="tag">Debugging</span>
            <span class="tag">Code Review</span>
          </div>
        </article>
      </div>

      <!-- Bottom statement -->
      <div class="mt-20 rounded-3xl bg-gray-950 px-8 py-10 lg:px-12 lg:py-12">
        <div class="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p
              class="text-sm font-semibold uppercase tracking-[0.2em] text-primary-400"
            >
              Ma philosophie
            </p>

            <h3 class="mt-3 text-2xl font-bold text-white sm:text-3xl">
              La technologie est un moyen,
              <span class="text-gray-500">
                pas une fin.
              </span>
            </h3>

            <p class="mt-4 max-w-2xl leading-7 text-gray-400">
              Le choix d'une technologie doit répondre au contexte,
              aux contraintes et aux objectifs du projet. Mon approche
              consiste d'abord à comprendre le problème avant de concevoir
              la solution.
            </p>
          </div>

          <a
            href="/projects"
            class="inline-flex items-center justify-center gap-2 rounded-full
                   bg-white px-6 py-3 text-sm font-semibold text-gray-950
                   transition hover:bg-gray-200"
          >
            Voir mes projets

            <UIcon
              name="i-lucide-arrow-up-right"
              class="h-4 w-4"
            />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.skill-card {
  @reference "tailwindcss";
  @apply rounded-3xl border border-gray-200 bg-white p-8 transition duration-300 hover:-translate-y-1 hover:shadow-xl;
}

/* .skill-icon {
  @reference "tailwindcss";
  @apply flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary;
} */

.skill-title {
  @reference "tailwindcss";
  @apply mt-6 text-xl font-semibold text-gray-900;
}

.skill-description {
  @reference "tailwindcss";
  @apply mt-3 leading-7 text-gray-600;
}

.skill-tags {
  @reference "tailwindcss";
  @apply mt-6 flex flex-wrap gap-2;
}

.tag {
  @reference "tailwindcss";
  @apply rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600;
}
</style>
