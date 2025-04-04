<template>
    <div class="modal-backdrop" @click="$emit('close')">
        <div class="modal" @click.stop>
            <h3 v-if="title">{{ title }}</h3>

            <slot></slot>
        </div>
    </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

defineProps({
  title: String
})

defineEmits(['close'])

</script>

<style lang="scss" scoped>
    .modal-backdrop {
        background: rgba(0, 0, 0, 0.3);
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }

    .modal {
        width: 60%;
        border-radius: 10px;
        background: azure;
        cursor: default;
        padding: 15px;
    }
</style>
