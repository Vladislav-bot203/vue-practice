<template>
  <component :is="`${layout}-layout`" v-if="layout"></component>
</template>

<script>
import AuthLayout from './layouts/AuthLayout.vue'
import MainLayout from './layouts/MainLayout.vue'
import { useRoute } from 'vue-router'
import { computed } from 'vue'

export default {
  components: { MainLayout, AuthLayout },
  setup () {
    const route = useRoute()

    const layout = computed(() => {
      return route.meta.layout
    })
    return {
      layout
    }
  }
}
</script>

<style lang="scss">

</style>
