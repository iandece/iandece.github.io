<template>
  <div class="h-full flex flex-col lg:flex-row justify-center gap-10">
    <div class="w-full lg:w-1/3 my-auto">
      <img src="@/assets/images/me.webp" alt="Dian Dwi Cahyo" class="rounded-4xl" />
    </div>
    <div class="w-full lg:w-2/5 my-auto">
      <h1 class="text-7xl uppercase">
        <span class="main-text-color capitalize text-lg">{{ $t('hi') }},</span>
        <br />
        {{ $t('introduction') }} Dian D.C
      </h1>
      <h2 class="secondary-text-color">Web Developer</h2>
    </div>
  </div>
</template>
