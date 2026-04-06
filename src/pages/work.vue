<template>
  <main class="work-container overflow-auto lg:overflow-hidden">
    <h1 class="text-center text-2xl font-bold mt-4">{{ $t('myWorks') }}</h1>
    <div class="flex mt-4 h-[calc(100%-64px)]">
      <div
        class="work-wrapper"
        :class="{
          'w-full': !activeWorkDetails,
          'hidden lg:block lg:w-1/2': !!activeWorkDetails,
        }"
      >
        <UButton
          v-for="(work, indexWork) in works"
          :key="indexWork"
          :active="indexWork === activeWorkIndex"
          active-class="active-work"
          class="work"
          color="neutral"
          variant="outline"
          @click="viewWorkDetail(indexWork)"
          :class="{
            'hidden lg:flex': !!activeWorkDetails,
          }"
        >
          <div class="w-6 text-left">{{ indexWork + 1 }}.</div>
          <div class="text-base lg:text-xl text-left">
            {{ work.title }}
            <UTooltip :text="work.status.toUpperCase()">
              <font-awesome-icon
                v-if="work.status === 'paused'"
                :icon="['fas', 'exclamation-circle']"
                class="text-red-400 text-xs align-middle"
              />
            </UTooltip>
          </div>
          <div class="ml-auto text-muted text-xs lg:text-base">
            {{ work.user }}
            <div class="text-2xs lg:text-xs text-right mt-1 flex gap-1 justify-end">
              <span v-for="(tech, indexTech) in work.mainTechs" :key="`${indexWork}-${indexTech}`">
                <font-awesome-icon v-if="tech.faIcon" :icon="['fab', tech.faIcon]" />
                <span v-else>
                  {{ tech.label }}
                </span>
              </span>
            </div>
          </div>
        </UButton>
      </div>
      <div v-if="activeWorkDetails" class="work-detail">
        <UButton
          color="neutral"
          variant="ghost"
          class="absolute right-0"
          @click="activeWorkIndex = null"
        >
          <font-awesome-icon :icon="['fas', 'xmark']" />
        </UButton>
        <h2 class="text-lg lg:text-2xl">{{ activeWorkDetails.title }}</h2>
        <div class="text-xs mt-2 flex gap-1 flex-wrap">
          <UBadge
            v-for="(tech, indexTech) in activeWorkDetails.allTechs"
            :key="indexTech"
            color="success"
            variant="outline"
            class="capitalize"
          >
            {{ tech }}
          </UBadge>
        </div>
        <section
          class="text-sm lg:text-base my-4 text-justify"
          v-html="$t(activeWorkDetails.description)"
        ></section>
        <div
          class="flex flex-nowrap lg:flex-wrap flex-col lg:flex-row gap-4 justify-evenly overflow-auto"
        >
          <div
            v-for="(gallery, indexGallery) in activeWorkDetails.galleries"
            :key="indexGallery"
            class="relative h-56 lg:h-40 w-full lg:w-[45%]"
          >
            <USkeleton
              v-if="imagesLoading[indexGallery] !== false"
              class="absolute inset-0 z-10 w-full h-full rounded-sm"
            />

            <img
              :src="getImage(gallery)"
              class="border border-accented hover:border-gray-400 cursor-pointer p-2 rounded-sm object-cover w-full h-full transition-opacity duration-300"
              :class="{
                'opacity-0': imagesLoading[indexGallery] !== false,
                'opacity-100': imagesLoading[indexGallery] === false,
              }"
              @load="handleImageLoad(indexGallery)"
              @click="clickGalleryHandler(indexGallery)"
            />
          </div>
        </div>
      </div>
    </div>
    <div v-if="activeWorkDetails" :key="activeWorkIndex">
      <FsLightbox :toggler="toggler" :sourceIndex="sourceIndex" :sources="dynamicSources" />
    </div>
  </main>
</template>

<script setup>
import { computed, ref } from 'vue'
import works from '@/variables/work.json'
import FsLightbox from 'fslightbox-vue'

import { useAssets } from '@/composables/useAssets'

const { getImage } = useAssets()

const activeWorkIndex = ref(null)
const toggler = ref(false)
const sourceIndex = ref(0)
const imagesLoading = ref({})

const activeWorkDetails = computed(() => {
  return activeWorkIndex.value !== null ? works[activeWorkIndex.value] : null
})

const dynamicSources = computed(() => {
  return activeWorkIndex.value !== null
    ? works[activeWorkIndex.value].galleries.map((path) => getImage(path))
    : []
})

const handleImageLoad = (index) => {
  imagesLoading.value[index] = false
}

const viewWorkDetail = (index) => {
  if (activeWorkIndex.value !== index) {
    imagesLoading.value = {} // reset state loading
    activeWorkIndex.value = index
  } else {
    activeWorkIndex.value = null
  }
}

const clickGalleryHandler = (index) => {
  sourceIndex.value = index
  toggler.value = !toggler.value
}
</script>

<style>
@reference "@/assets/styles/index.css";
.work-container {
  @apply flex flex-col;
  height: calc(100vh - 200px);
}
.work-wrapper {
  overflow-y: auto;
  padding-right: 12px;
  margin-right: -12px;
  transition: width 0.4s ease;
}
.work {
  @apply w-full mb-2 py-4;
}
.active-work {
  background: var(--background-color-elevated);
}
.work-detail {
  @apply relative w-full lg:w-1/2 ml-0 lg:ml-4;
  transition: width 0.3s ease-in-out;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.2s ease;
}

.slide-enter-from {
  transform: translateX(100%);
}

.slide-leave-to {
  transform: translateX(100%);
}
</style>
