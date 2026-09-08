<template>
  <footer class="bg-gray-950 text-white">
    <div class="mx-auto max-w-7xl px-6 py-16 lg:px-8">
      <!-- Main footer -->
      <div
        class="flex flex-col gap-10 border-b border-white/10 pb-12
               md:flex-row md:items-start md:justify-between"
      >
        <!-- Identity -->
        <div class="max-w-md">
          <a
            href="/"
            class="text-2xl font-bold tracking-tight"
          >
            Aziz
            <span class="font-normal text-white/60">
              Gaou
            </span>
          </a>

          <p class="mt-4 leading-7 text-gray-400">
            Senior Full Stack Developer
            <span class="text-gray-600">·</span>
            PHP · Python · Nuxt.js
          </p>

          <p class="mt-4 max-w-sm text-sm leading-6 text-gray-500">
            Conception et évolution de solutions web métier,
            architectures backend, APIs, intégrations et automatisation.
          </p>
        </div>

        <!-- Navigation -->
        <div>
          <h3 class="text-sm font-semibold uppercase tracking-wider text-white">
            Navigation
          </h3>

          <nav class="mt-4 flex flex-col gap-3">
            <a
              href="/"
              class="text-sm text-gray-400 transition hover:text-white"
            >
              Home
            </a>

            <a
              href="/experience"
              class="text-sm text-gray-400 transition hover:text-white"
            >
              Experience
            </a>

            <a
              href="/projects"
              class="text-sm text-gray-400 transition hover:text-white"
            >
              Projects
            </a>

            <a
              href="/skills"
              class="text-sm text-gray-400 transition hover:text-white"
            >
              Skills
            </a>

            <a
              href="/contact"
              class="text-sm text-gray-400 transition hover:text-white"
            >
              Contact
            </a>
          </nav>
        </div>

        <!-- Contact -->
        <div>
          <h3 class="text-sm font-semibold uppercase tracking-wider text-white">
            Contact
          </h3>

          <div class="mt-4 flex flex-col gap-3">
            <a
              href="mailto:aziz@gaou.info"
              class="text-sm text-gray-400 transition hover:text-white"
            >
              aziz@gaou.info
            </a>

            <a
              href="https://www.linkedin.com/in/aziz-gaou/"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 text-sm text-gray-400
                     transition hover:text-white"
            >
              <UIcon
                name="i-simple-icons-linkedin"
                class="h-4 w-4"
              />

              LinkedIn
            </a>

            <a
              href="https://github.com/gaouaziz"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 text-sm text-gray-400
                     transition hover:text-white"
            >
              <UIcon
                name="i-simple-icons-github"
                class="h-4 w-4"
              />

              GitHub
            </a>
          </div>
        </div>
      </div>

      <!-- Bottom -->
      <div
        class="flex flex-col gap-4 pt-8 text-sm text-gray-500
               sm:flex-row sm:items-center sm:justify-between"
      >
        <p>
          © {{ new Date().getFullYear() }} Aziz Gaou. All rights reserved.
        </p>

        <p>
          Senior Full Stack Developer
        </p>
      </div>
    </div>
  </footer>
</template>
