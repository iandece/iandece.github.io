<template>
  <div class="layout-container">
    <layout-header />
    <main class="layout-body">
      <UContainer>
        <router-view class="main-app" />
      </UContainer>
    </main>
    <layout-footer />
  </div>
</template>

<script>
import layoutHeader from '@/layouts/layout-header.vue'
import layoutFooter from '@/layouts/layout-footer.vue'

export default {
  components: {
    layoutHeader,
    layoutFooter,
  },
  setup() {},
}
</script>
