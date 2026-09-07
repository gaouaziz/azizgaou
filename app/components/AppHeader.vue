<script setup lang="ts">
  import { ref, onMounted, onBeforeUnmount } from 'vue'
  const isMenuOpen = ref(false)
  const isScrolled = ref(false)

  const navigation = [
    { label: 'Home', href: '#home' },
    { label: 'Expertise', href: '#expertise' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ]

  const closeMenu = () => {
    isMenuOpen.value = false
  }

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  handleScroll()
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <header
    class="fixed inset-x-0 top-0 z-50 transition-all duration-300"
    :class="[
      isScrolled
        ? 'bg-black/70 backdrop-blur-xl shadow-lg'
        : 'bg-transparent'
    ]"
  >
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div
  class="flex items-center justify-between transition-all duration-300"
  :class="isScrolled ? 'h-16' : 'h-20'"
>

        <!-- Logo -->
        <a
          href="#home"
          class="text-xl font-bold tracking-tight text-white"
        >
          Aziz <span class="font-normal opacity-80">Gaou</span>
        </a>

        <!-- Desktop navigation -->
        <nav class="hidden items-center gap-7 lg:flex">
          <a
            v-for="item in navigation"
            :key="item.href"
            :href="item.href"
            class="text-sm font-medium text-white/80 transition hover:text-white"
          >
            {{ item.label }}
          </a>
        </nav>

        <!-- Mobile menu button -->
        <button
          type="button"
          class="flex h-10 w-10 items-center justify-center rounded-lg
                 border border-white/30 text-white lg:hidden"
          aria-label="Toggle navigation"
          @click="isMenuOpen = !isMenuOpen"
        >
          <span class="text-xl">
            {{ isMenuOpen ? '×' : '☰' }}
          </span>
        </button>
      </div>

      <!-- Mobile navigation -->
      <div
        v-if="isMenuOpen"
        class="rounded-2xl border border-white/20 bg-black/70 p-5
               backdrop-blur-xl lg:hidden"
      >
        <nav class="flex flex-col gap-4">
          <a
            v-for="item in navigation"
            :key="item.href"
            :href="item.href"
            class="text-sm font-medium text-white/90 hover:text-white"
            @click="closeMenu"
          >
            {{ item.label }}
          </a>

          <a
            href="mailto:aziz@gaou.info"
            class="mt-2 rounded-full bg-white px-5 py-3 text-center
                   text-sm font-medium text-gray-900"
            @click="closeMenu"
          >
            Me contacter
          </a>
        </nav>
      </div>
    </div>
  </header>
</template>
