<template>
    <form @submit.prevent="onSubmit">
        <div class="form-control">
            <label for=""><strong>ФИО:</strong></label>
            <input type="text" v-model="fio" @blur="fBlur" :class="{invalid: fError}">
            <small v-if="fError">{{ fError }}</small>
        </div>

        <div class="form-control">
            <label for="phone"><strong>Телефон:</strong></label>
            <input type="text" id="phone" v-model="phone" @blur="pBlur" :class="{invalid: pError}">
            <small v-if="pError">{{ pError }}</small>
        </div>

        <div class="form-control">
            <label for="amount"><strong>Суммы:</strong></label>
            <input type="number" id="amount" v-model.number="amount" @blur="aBlur" :class="{invalid: aError}">
            <small v-if="aError">{{ aError }}</small>
        </div>

        <div class="form-control">
            <label for="status"><strong>Статус:</strong></label>
            <select id="status" v-model="status">
                <option value="done">Завершен</option>
                <option value="cancelled">Отменен</option>
                <option value="active">Активен</option>
                <option value="pending">Выполняется</option>
            </select>
        </div>

        <button :disabled="isSubmitting">Создать</button>
    </form>
</template>

<script setup>
import useRequestForm from '../../use/request-form.js'
import { defineEmits } from 'vue'
import { useStore } from 'vuex'

const emit = defineEmits(['created'])
const store = useStore()

const submit = async (values) => {
  await store.dispatch('request/create', values)
  emit('created')
}

const {
  status,
  isSubmitting,
  fio,
  phone,
  amount,
  fError,
  pError,
  aError,
  pBlur,
  aBlur,
  fBlur,
  onSubmit
} = useRequestForm(submit)

</script>

<style lang="scss" scoped>
.form-control {
    display: flex;
    width: 300px;
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

.invalid {
    border: 2px solid rgb(229, 46, 46);
}

small {
    color: rgb(229, 46, 46);
}

button {
    padding: 6px;
    width: 20%;
    border: 1px solid rgb(112, 189, 112);
    color: rgb(112, 189, 112);
    background-color: beige;
    border-radius: 5px;

    &:hover {
        cursor: pointer;
    }
}
</style>
