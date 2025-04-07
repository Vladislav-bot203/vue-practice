<template>
    <div class="filter">
        <div class="form-control">
            <input type="text" placeholder="Начните писать имя" v-model="name">
        </div>
        <div class="form-control">
            <select v-model="status">
                <option disabled selected>Выберите статус</option>
                <option value="done">Завершен</option>
                <option value="cancelled">Отменен</option>
                <option value="active">Активен</option>
                <option value="pending">Выполняется</option>
            </select>
        </div>
        <button v-if="isActive" class="clear" @click="reset">Очистить</button>
    </div>
</template>

<script setup>
import { defineProps, defineEmits, ref, watch, computed } from 'vue'

const emit = defineEmits(['update:modelValue'])
defineProps(['modelValue'])

const name = ref('')
const status = ref('')

watch([name, status], (values) => {
  emit('update:modelValue', {
    name: values[0],
    status: values[1]
  })
})

const isActive = computed(() => name.value || status.value)

const reset = () => {
  name.value = ''
  status.value = null
}

</script>

<style lang="scss" scoped>

.filter {
    display: flex;
    gap: 20px;
}

.form-control {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 20px;
}

input {
    padding: 5px;
    width: 200px;
    border-radius: 10px;
    border: 1px solid rgb(190, 184, 184);
}

select {
    padding: 5px;
    width: 210px;
    border-radius: 10px;
    border: 1px solid rgb(190, 184, 184);
}

.clear {
    background-color: rgb(202, 52, 52);
    color: white;
    border-radius: 10px;
    border: 0;
    padding: 0 15px;
    height: 30px;
    box-sizing: border-box;

    &:hover {
        cursor: pointer;
    }
}

</style>
