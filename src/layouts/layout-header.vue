<template>
  <UHeader class="layout-header" mode="slideover">
    <template #title> Dian D.C. </template>

    <UNavigationMenu :items="items" />

    <template #right>
      <UColorModeButton />
      <UButton color="neutral" variant="outline" @click="clickLangHandler">
        {{ lang.toLocaleUpperCase() }}
      </UButton>
    </template>
    {{ $t.home }}
    <template #body>
      <UNavigationMenu :items="items" orientation="vertical" class="-mx-2.5" />
    </template>
  </UHeader>
</template>

<script setup>
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';
import { useI18n } from 'vue-i18n';
const { locale, t } = useI18n();

const route = useRoute();
const items = computed(() => [
  {
    label: t('home'),
    to: '/',
    icon: 'i-charm-home',
    active: route.name === 'home',
  },
  {
    label: t('myWorks'),
    to: '/work',
    icon: 'i-lucide-box',
    active: route.path.startsWith('/work'),
  },
]);

const lang = ref('en');
const clickLangHandler = () => {
  lang.value = lang.value === 'en' ? 'id' : 'en';
  locale.value = lang.value;
};
</script>
