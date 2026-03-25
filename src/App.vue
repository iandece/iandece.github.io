<template>
  <UApp>
    <layout>
      <RouterView />
    </layout>
  </UApp>
</template>

<script>
import Layout from './layouts/layout.vue'

export default {
  components: {
    Layout,
  },
}
</script>
