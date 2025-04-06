<template>
        <div class="card">
        <h1 class="card-title">
            {{title}}
            <slot name="header"></slot>
        </h1>

        <slot></slot>
    </div>
</template>

<script setup>
import { defineProps, toRef, watchEffect } from 'vue'

const props = defineProps({
  title: {
    type: String,
    required: true
  }
})

const titleRef = toRef(props, 'title')

watchEffect(() => {
  document.title = `${titleRef.value} | 'Клон Банка'`
})

</script>

<style scoped lang="scss">
.card {
    width: 80%;
    padding: 20px;
    box-sizing: border-box;
    background-color: azure;
    margin: 20px auto;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
}
h1 {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
</style>
