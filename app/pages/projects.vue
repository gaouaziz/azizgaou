<template>
  <main>
    <!-- Hero -->
    <section class="relative overflow-hidden bg-gray-950 py-32 sm:py-40">
      <!-- Header -->
      <AppHeader />
      <div
        class="absolute inset-0 bg-gradient-to-br from-gray-950
               via-gray-900 to-gray-800"
      />

      <div
        class="absolute -right-40 top-0 h-96 w-96 rounded-full
               bg-white/5 blur-3xl"
      />

      <div class="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div class="max-w-3xl">
          <p
            class="text-sm font-semibold uppercase tracking-[0.2em]
                   text-primary-400"
          >
            Réalisations
          </p>

          <h1
            class="mt-6 text-5xl font-bold tracking-tight text-white
                   sm:text-6xl"
          >
            Projets
          </h1>

          <p
            class="mt-6 max-w-2xl text-lg leading-8 text-gray-400"
          >
            Des projets construits autour de problématiques métier concrètes,
            de l’architecture backend à l’intégration de systèmes et
            l’automatisation.
          </p>
        </div>
      </div>
    </section>

    <!-- Projects -->
    <section class="bg-gray-50 py-24 sm:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <!-- Intro -->
        <div class="max-w-3xl">
          <div class="flex items-center gap-3">
            <span class="h-px w-10 bg-primary" />

            <p
              class="text-sm font-semibold uppercase tracking-[0.2em]
                     text-primary"
            >
              Sélection de projets
            </p>
          </div>

          <h2
            class="mt-6 text-4xl font-bold tracking-tight text-gray-900
                   sm:text-5xl"
          >
            Transformer un besoin métier
            <span class="text-gray-400">
              en solution technique.
            </span>
          </h2>

          <p class="mt-6 text-lg leading-8 text-gray-600">
            Quelques réalisations illustrant mon expérience dans le
            développement d’applications web, l’architecture, les intégrations
            et l’automatisation.
          </p>
        </div>

        <!-- Grid -->
        <div
          class="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          <ProjectCard
            v-for="project in projects"
            :key="project.title"
            v-bind="project"
          />
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="bg-white py-24 sm:py-32">
      <div class="mx-auto max-w-4xl px-6 text-center lg:px-8">
        <p
          class="text-sm font-semibold uppercase tracking-[0.2em]
                 text-primary"
        >
          Une idée ou un projet ?
        </p>

        <h2
          class="mt-6 text-4xl font-bold tracking-tight text-gray-900
                 sm:text-5xl"
        >
          Parlons de votre besoin.
        </h2>

        <p class="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
          Vous avez un projet web, une problématique backend ou un processus
          à automatiser ? Échangeons sur la meilleure approche technique.
        </p>

        <div class="mt-10">
          <a
            href="/contact"
            class="inline-flex items-center gap-2 rounded-full
                   bg-gray-950 px-6 py-3 text-sm font-semibold text-white
                   transition hover:bg-gray-800"
          >
            Me contacter

            <UIcon
              name="i-lucide-arrow-right"
              class="h-4 w-4"
            />
          </a>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import ProjectCard from '~/components/sections/ProjectCard.vue'

useSeoMeta({
  title: 'Projects — Aziz Gaou',
  description:
    'Selected projects in e-commerce, software architecture, APIs, external integrations, product automation and business applications.'
})

const projects = [
  {
    title: 'Plateforme e-commerce d’impression',
    company: 'Flyer.be — The Original',
    category: 'E-commerce · Architecture',
    description:
      'Évolution d’une plateforme e-commerce dédiée aux produits imprimés et personnalisables. Participation au développement de fonctionnalités métier et à l’évolution d’une architecture basée sur CQRS, Event Sourcing et Process Manager.',
    technologies: [
      'PHP',
      'Mezzio',
      'CQRS',
      'Event Sourcing',
      'Prooph',
      'PostgreSQL'
    ],
    icon: 'i-lucide-shopping-cart',
    featured: true
  },

  {
    title: 'Intégration Probo',
    company: 'Flyer.be — The Original',
    category: 'Integration · E-commerce',
    description:
      'Mise en place d’un processus d’import de catalogues et de configurations produits complexes provenant de Probo, avec gestion des options imbriquées, relations parent/enfant, données multilingues, images et accessoires.',
    technologies: [
      'PHP',
      'Probo',
      'Symfony Console',
      'APIs',
      'CLI'
    ],
    icon: 'i-lucide-package',
    featured: true
  },

  {
    title: 'Intégration PF Concept',
    company: 'Flyer.be — The Original',
    category: 'Integration · Products',
    description:
      'Intégration de produits promotionnels et de leurs configurations : caractéristiques, options, couleurs, faces, zones d’impression, accessoires et informations multilingues.',
    technologies: [
      'PHP',
      'PF Concept',
      'Symfony Console',
      'APIs',
      'CLI'
    ],
    icon: 'i-lucide-box',
    featured: true
  },

  {
    title: 'Automatisation Flyeralarm',
    company: 'Flyer.be — The Original',
    category: 'Automation · API',
    description:
      'Développement d’un service REST permettant d’automatiser la configuration de produits et le parcours de commande Flyeralarm jusqu’à la génération du lien de paiement.',
    technologies: [
      'Python',
      'FastAPI',
      'Playwright',
      'REST API',
      'Automation'
    ],
    icon: 'i-lucide-bot',
    featured: true
  },

  {
    title: 'Solutions web métier',
    company: 'Hsabati',
    category: 'Web · Full Stack',
    description:
      'Développement et évolution de solutions web répondant à différents besoins métier, avec une attention particulière portée au backend, aux APIs et à l’intégration des différents composants.',
    technologies: [
      'PHP',
      'Python',
      'JavaScript',
      'APIs',
      'MySQL'
    ],
    icon: 'i-lucide-layout-dashboard'
  },

  {
    title: 'Applications web',
    company: 'bnet Technologies',
    category: 'Web · Full Stack',
    description:
      'Développement de différentes applications web et solutions métier, avec une évolution progressive vers le backend, les bases de données, les APIs et l’architecture applicative.',
    technologies: [
      'PHP',
      'CodeIgniter',
      'Zend Framework',
      'Java',
      'MySQL',
      'SQL Server'
    ],
    icon: 'i-lucide-code-2'
  }
]
</script>
