<template>
    <the-navbar></the-navbar>
    <div class="container with-nav">
        <router-view></router-view>
    </div>
</template>

<script>
import TheNavbar from '@/components/TheNavbar.vue'
export default {
  components: { TheNavbar },
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
