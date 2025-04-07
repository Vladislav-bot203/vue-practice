<template>
    <span :class="className">{{ text }}</span>
</template>

<script setup>
import { defineProps, ref, watch } from 'vue'

const classesMap = {
  active: 'primary',
  cancelled: 'danger',
  done: 'primary',
  pending: 'warning'
}

const textMap = {
  active: 'Активно',
  cancelled: 'Отменено',
  done: 'Выполнено',
  pending: 'Выполняется'
}

const props = defineProps({
  type: {
    type: String,
    required: true,
    validator (value) {
      return ['active', 'cancelled', 'done', 'pending'].includes(value)
    }
  }
})

const className = ref(classesMap[props.type])
const text = ref(textMap[props.type])

watch(props, value => {
  className.value = classesMap[value.type]
  text.value = textMap[value.type]
})

</script>

<style lang="scss" scoped>

.primary {
    padding: 2px 15px;
    border: 1px solid rgb(46, 184, 46);
    color: rgb(46, 184, 46);
    border-radius: 5px;
    box-sizing: border-box;
}

.warning {
    padding: 2px 4px;
    border: 1px solid rgb(206, 223, 59);
    color: rgb(206, 223, 59);
    border-radius: 5px;
    box-sizing: border-box;
}

.danger {
    padding: 2px 4px;
    border: 1px solid rgb(207, 55, 35);
    color: rgb(207, 55, 35);
    border-radius: 5px;
    box-sizing: border-box;
}

</style>
