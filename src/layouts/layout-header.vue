<template>
  <UHeader class="layout-header" mode="slideover">
    <template #title>
      <Logo class="h-6 w-auto" />
    </template>

    <UNavigationMenu :items="items" />

    <template #right>
      <UColorModeButton />

      <UTooltip text="Open on GitHub" :kbds="['meta', 'G']">
        <UButton
          color="neutral"
          variant="ghost"
          to="https://github.com/nuxt/ui"
          target="_blank"
          icon="i-simple-icons-github"
          aria-label="GitHub"
        />
      </UTooltip>
    </template>

    <template #body>
      <UNavigationMenu :items="items" orientation="vertical" class="-mx-2.5" />
    </template>
  </UHeader>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const items = computed(() => [
  {
    label: 'Home',
    to: '/docs/getting-started',
    icon: 'i-charm-home',
    active: route.path.startsWith('/docs/getting-started'),
  },
  {
    label: 'Projects',
    to: '/docs/components',
    icon: 'i-lucide-box',
    active: route.path.startsWith('/docs/components'),
  },
])
</script>
