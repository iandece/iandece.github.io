<template>
  <div class="layout-container">
    <Background />
    <layout-header />
    <main class="layout-body">
      <UContainer class="flex-1">
        <router-view class="main-app" />
      </UContainer>
    </main>
    <layout-footer />
  </div>
</template>

<script setup>
import layoutHeader from '@/layouts/layout-header.vue';
import layoutFooter from '@/layouts/layout-footer.vue';
import Background from '@/components/background.vue';
</script>
