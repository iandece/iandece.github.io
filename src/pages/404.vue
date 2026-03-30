<template>
  <main class="bg-slate-950 flex items-center justify-center h-screen overflow-hidden antialiased">
    <div class="absolute inset-0 z-0 pointer-events-none">
      <div
        class="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-[100px] animate-breathe"
      ></div>
      <div
        class="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] animate-breathe"
        style="animation-delay: -4s"
      ></div>
    </div>

    <div class="relative z-10 text-center px-6">
      <h1
        class="text-[10rem] md:text-[15rem] font-black leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-800 select-none"
      >
        404
      </h1>

      <div class="mt-4 space-y-2">
        <h2 class="text-2xl md:text-3xl font-bold text-white">Lost in the wires.</h2>
        <p class="text-slate-400 max-w-md mx-auto">
          The page you are looking for has been moved, deleted, or never existed in this dimension.
        </p>
      </div>

      <div class="mt-10">
        <a
          href="/"
          class="inline-block px-8 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-full transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(79,70,229,0.4)]"
        >
          Back to Safety
        </a>
      </div>
    </div>

    <div class="absolute bottom-8 w-full text-center">
      <span class="text-slate-600 text-xs tracking-widest uppercase">Error Code: 0x404_NULL</span>
    </div>
  </main>
</template>

<style scoped>
@keyframes breathe {
  0%,
  100% {
    transform: scale(1);
    opacity: 0.3;
  }
  50% {
    transform: scale(1.1);
    opacity: 0.5;
  }
}
.animate-breathe {
  animation: breathe 8s ease-in-out infinite;
}
</style>
