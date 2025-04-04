<template>
    <form class="card" @submit.prevent="onSubmit">
        <h1>Войти в систему</h1>

        <div class="form-control">
            <label for="email"><strong>Email:</strong></label>
            <input :class="{invalid: eError}" type="email" id="email" v-model="email" @blur="eBlur">
            <small v-if="eError">{{ eError }}</small>
        </div>

        <div class="form-control">
            <label for="password"><strong>Пароль:</strong></label>
            <input :class="{invalid: pError}" type="password" id="password" v-model="password" @blur="pBlur">
            <small v-if="pError">{{ pError }}</small>
        </div>

        <div>
            <button class="button" type="submit" :disabled="isSubmitting || isTooManyAttemts">Войти</button>
            <span class="text-danger" v-if="isTooManyAttemts">Вы слишком часто пытаетесь войти в систему, попробуйте позже</span>
        </div>
    </form>
</template>

<script>
import { useLoginForm } from '@/use/login-form'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import error from '@/utils/error'

export default {
  setup () {
    const route = useRoute()
    const store = useStore()

    if (route.query.message) {
      store.dispatch('setMessage', {
        value: error(route.query.message),
        type: 'warning'
      })
    }

    return { ...useLoginForm() }
  }
}
</script>

<style lang="scss">
.card {
    width: 60%;
    padding: 20px;
    box-sizing: border-box;
    background-color: azure;
    margin: 20px auto;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    gap: 30px;
}

.form-control {
    display: flex;
    width: 300px;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
}

input {
    padding: 5px;
    width: 200px;
    border-radius: 10px;
    border: 1px solid rgb(190, 184, 184);
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

.invalid {
    border: 2px solid rgb(170, 58, 58);
    border-radius: 5px;
}

small {
    color: rgb(170, 58, 58);
}

.text-danger {
    color: rgb(170, 58, 58);
    font-size: 12px;
    margin-left: 5px;
}

</style>
