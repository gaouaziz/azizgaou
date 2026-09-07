<template>
  <!-- Background image -->
  <div
    class="absolute inset-0 bg-cover bg-center"
    style="background-image: url('/images/aziz-waterfront.jpg')"
  />

  <!-- Brightness toward the right -->
  <div
    class="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-white/25"
  />

  <!-- Soft light -->
  <div
    class="absolute -right-40 top-1/2 h-[700px] w-[700px] -translate-y-1/2 rounded-full bg-white/10 blur-[150px]"
  />

  <!-- Main dark overlay -->
  <div
    class="absolute inset-0 bg-gradient-to-r from-black/80 via-black/0 to-black/10"
  />

  <!-- Top subtle overlay -->
  <div
    class="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50"
  />

  <!-- Left cinematic glow -->
  <div
    class="absolute -left-40 top-1/3 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[120px]"
  />

  <!-- Right subtle glow -->
  <div
    class="absolute -right-40 bottom-0 h-[450px] w-[450px] rounded-full bg-cyan-400/10 blur-[120px]"
  />

  <!-- Vignette -->
  <div class="absolute inset-0 shadow-[inset_0_0_180px_rgba(0,0,0,0.45)]" />

  <!-- Bottom fade -->
  <div
    class="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black/50 to-transparent"
  />

  <!-- Curved / angled transition -->
  <div
    class="absolute -bottom-1 left-0 h-24 w-full bg-white"
    style="
      clip-path: polygon(
        0 55%,
        15% 45%,
        30% 50%,
        45% 65%,
        60% 72%,
        75% 62%,
        90% 48%,
        100% 40%,
        100% 100%,
        0 100%
      );
    "
  />
</template>
