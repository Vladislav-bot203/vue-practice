<template>
    <div class="question"  @click="open">
        <div class="question-title">{{ question.title }}</div>
        <div
          class="question-body"
          v-if="isOpen"
        >{{ question.text }}</div>
    </div>
</template>

<script setup>
import { defineProps, ref } from 'vue'

defineProps(['question'])

const isOpen = ref(false)

const open = () => {
  isOpen.value = !isOpen.value
}

</script>

<style lang="scss" scoped>

.question-title {
    text-transform: uppercase;
    font-weight: 800;
    font-size: 15px;
}

.question {
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-bottom: 20px;
    padding: 10px;
    border-radius: 10px;

    &:hover {
        background-color: rgb(219, 238, 238);
        cursor: pointer;
    }
}

.question-body {
    font-size: 12px;
}

</style>
