<template>
        <div v-if="back" class="back">
          <router-link to="/">Вернуться к списку заявок</router-link>
        </div>
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
  },
  back: {
    type: Boolean,
    default: false
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

.back {
  width: 80%;
  margin: 40px auto 0 auto;
  text-align: left;
}

a {
  color: white;
  text-decoration: none;
  font-size: 12px;
}
</style>
