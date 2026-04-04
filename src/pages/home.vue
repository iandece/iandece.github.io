<template>
  <div class="h-full flex flex-col lg:flex-row justify-center gap-10">
    <div class="w-full lg:w-1/3 my-auto relative min-h-75 flex items-center justify-center">
      <USkeleton v-if="isImageLoading" class="absolute inset-0 w-full h-full rounded-4xl" />

      <img
        src="@/assets/images/me.webp"
        alt="Photo of Dian Dwi Cahyo"
        class="rounded-4xl transition-opacity duration-500 w-full"
        @load="handleImageLoad"
      />
    </div>
    <div class="w-full lg:w-2/5 my-auto">
      <h1 class="text-7xl uppercase">
        <span class="main-text-color capitalize text-lg">{{ $t('hi') }},</span>
        <br />
        {{ $t('introduction') }} Dian D.C.
      </h1>
      <h2 class="secondary-text-color">Web Developer</h2>

      <div class="mt-4 flex gap-2">
        <a
          href="https://instagram.com/diandchyo"
          target="_blank"
          aria-label="Dian D.C instagram link"
        >
          <font-awesome-icon :icon="['fab', 'instagram']" />
        </a>
        <a href="https://linkedin.com/in/dece" target="_blank" aria-label="Dian D.C linked link">
          <font-awesome-icon :icon="['fab', 'linkedin']" />
        </a>
        <a href="https://github.com/iandece" target="_blank" aria-label="Dian D.C github link">
          <font-awesome-icon :icon="['fab', 'github']" />
        </a>
      </div>

      <div class="mt-4">
        <UButton
          color="neutral"
          variant="outline"
          @click="$router.push({ name: 'work' })"
          aria-label="Dian D.C see my work button"
        >
          {{ $t('see') }} {{ $t('myWorks') }}
        </UButton>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isImageLoading = ref(true)

const handleImageLoad = () => {
  isImageLoading.value = false
}
</script>
