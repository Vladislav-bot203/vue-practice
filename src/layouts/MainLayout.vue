<template>
    <the-navbar></the-navbar>
    <the-sidebar></the-sidebar>
    <div class="container with-nav">
        <app-message></app-message>
        <router-view></router-view>
    </div>
</template>

<script>
import TheNavbar from '@/components/TheNavbar.vue'
import AppMessage from '@/components/ui/AppMessage'
import TheSidebar from '@/components/TheSidebar.vue'

export default {
  components: { TheNavbar, AppMessage, TheSidebar },
  setup () {
  }
}
</script>

<style lang="scss" scoped>
.container {
    width: 100%;
    height: 100%;
}

.card {
    width: 60%;
    padding: 20px;
    box-sizing: border-box;
    background-color: azure;
    margin: 20px auto;
    border-radius: 10px;
}

</style>
