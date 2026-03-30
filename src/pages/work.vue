<template>
  <main class="work-container">
    <h1 class="text-center text-2xl font-bold mt-4">{{ $t('myWorks') }}</h1>
    <div class="flex mt-4 h-full">
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
          </div>
          <div class="ml-auto text-muted text-xs lg:text-base">
            {{ work.user }}
            <div class="text-2xs lg:text-xs text-right mt-1">
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
      <div v-if="activeWorkDetails" class="relative w-full lg:w-1/2 ml-0 lg:ml-4">
        <UButton
          color="neutral"
          variant="ghost"
          class="absolute right-0"
          @click="activeWorkIndex = null"
        >
          <font-awesome-icon :icon="['fas', 'xmark']" />
        </UButton>
        <h2 class="text-lg lg:text-xl">{{ activeWorkDetails.title }}</h2>
        <div class="text-xs mt-1 flex gap-1 flex-wrap">
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
      </div>
    </div>
  </main>
</template>

<script setup>
import { computed, ref } from 'vue'

const activeWorkIndex = ref(null)
const works = computed(() => {
  return [
    {
      title: 'Roblox Game Map',
      user: 'Self-employed',
      mainTechs: [
        {
          label: 'luau',
          faIcon: null,
          exIcon: 'lua',
        },
      ],
      allTechs: ['Roblox Studio'],
    },
    {
      title: 'Client & Internal Expedira',
      user: 'Expedira',
      mainTechs: [
        {
          label: 'Vue',
          faIcon: 'vuejs',
          exIcon: null,
        },
      ],
      allTechs: [
        'vue.js',
        'tailwindcss',
        'expedira UI Kit',
        'husky & lint-staged',
        'yup & vee-validate',
      ],
    },
    {
      title: 'Akselerasi Ekspor Kreasi Indonesia (ASIK)',
      user: 'Kemenekraf',
      mainTechs: [
        {
          label: 'Vue',
          faIcon: 'vuejs',
          exIcon: null,
        },
      ],
      allTechs: ['vue.js', 'tailwindcss', 'daisy ui', 'husky & lint-staged', 'yup & vee-validate'],
    },
    {
      title: 'Apresiasi Kreasi Indonesia (AKI)',
      user: 'Kemenparekraf',
      mainTechs: [
        {
          label: 'Vue',
          faIcon: 'vuejs',
          exIcon: null,
        },
      ],
      allTechs: ['vue.js', 'tailwindcss', 'element-ui', 'husky', 'yup & vee-validate'],
    },
    {
      title: 'Shipper Transporter App',
      user: 'iFreight.id',
      mainTechs: [
        {
          label: 'Flutter',
          faIcon: 'flutter',
          exIcon: null,
        },
      ],
      allTechs: ['flutter', 'firebase'],
    },
    {
      title: 'IFreight Blog Page',
      user: 'iFreight.id',
      mainTechs: [
        {
          label: 'Wordpress',
          faIcon: 'wordpress',
          exIcon: null,
        },
      ],
      allTechs: ['wordpress', 'tailwind'],
    },
    {
      title: 'IFreight Landing Page',
      user: 'iFreight.id',
      mainTechs: [
        {
          label: 'Vue (typescript)',
          faIcon: 'vuejs',
          exIcon: null,
        },
      ],
      allTechs: ['vue.js (typescript)', 'tailwind', 'GTM', 'vue-i18n', 'husky & lint-staged'],
    },
    {
      title: 'Internal iFreight.id',
      user: 'iFreight.id',
      mainTechs: [
        {
          label: 'Nuxt.js',
          faIcon: null,
          exIcon: 'nuxt',
        },
      ],
      allTechs: ['nuxt.js', 'tailwind', 'ifreight UI Kit', 'centrifuge (websocket)'],
    },
    {
      title: 'Shipper & Vendor iFreight.id',
      user: 'iFreight.id',
      mainTechs: [
        {
          label: 'Vue',
          faIcon: 'vuejs',
          exIcon: null,
        },
      ],
      allTechs: [
        'nuxt.js',
        'tailwind',
        'ifreight UI Kit',
        'centrifuge (websocket)',
        'sentry',
        'element-ui',
      ],
    },
    {
      title: 'Carpool Booking',
      user: 'Netmediatama / Net.tv',
      mainTechs: [
        {
          label: 'Laravel',
          faIcon: 'laravel',
          exIcon: null,
        },
      ],
      allTechs: ['laravel', 'bootstrap', 'jQuery', 'MySQL'],
    },
    {
      title: 'Net Corner',
      user: 'Netmediatama / Net.tv',
      mainTechs: [
        {
          label: 'Codeigniter',
          faIcon: null,
          exIcon: 'codeigniter',
        },
      ],
      allTechs: ['codeigniter', 'bootstrap', 'jQuery', 'MySQL'],
    },
    {
      title: 'Alamhotel',
      user: 'PT. Almita Jalamaya',
      mainTechs: [
        {
          label: 'Codeigniter',
          faIcon: null,
          exIcon: 'codeigniter',
        },
      ],
      allTechs: ['codeigniter', 'bootstrap', 'jQuery', 'MySQL'],
    },
    {
      title: 'Restaurant POS',
      user: 'PT. Almita Jalamaya',
      mainTechs: [
        {
          label: 'Codeigniter',
          faIcon: null,
          exIcon: 'codeigniter',
        },
      ],
      allTechs: ['codeigniter', 'bootstrap', 'jQuery', 'MySQL'],
    },
  ]
})
const activeWorkDetails = computed(() => {
  return activeWorkIndex.value !== null ? works.value[activeWorkIndex.value] : null
})
const viewWorkDetail = (index) => {
  activeWorkIndex.value = activeWorkIndex.value === index ? null : index
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
  scrollbar-gutter: stable; /* Ruang disediakan bahkan saat tidak ada scroll */
  padding-right: 12px;
  margin-right: -12px;
}

.work {
  @apply w-full mb-2 py-4;
}
.active-work {
  background: var(--background-color-elevated);
}
</style>
