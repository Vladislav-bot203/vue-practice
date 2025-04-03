<template>
    <div class="container">
        <app-message></app-message>
        <router-view></router-view>
    </div>
</template>

<script>
import AppMessage from '@/components/ui/AppMessage.vue'
export default {
  components: { AppMessage }
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
