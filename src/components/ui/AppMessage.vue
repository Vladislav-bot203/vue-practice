<template>
    <div v-if="message" :class="['alert', message.type]">
        <span class="alert-close" @click="close">&times;</span>
        <p class="alert-title">{{ title }}</p>
        <p>{{ message.value }}</p>
    </div>
</template>
<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
export default {
  setup () {
    const store = useStore()
    const TITLE_MAP = {
      primary: 'Успешно!',
      danger: 'Ошибка!',
      warning: 'Предупреждение!'
    }

    const message = computed(() => {
      return store.state.message
    })

    const title = computed(() => message.value ? TITLE_MAP[message.value.type] : null)
    return {
      message,
      title,
      close: () => store.commit('clearMessage')
    }
  }
}
</script>
<style lang="scss" scoped>
    .alert {
        display: flex;
        flex-direction: column;
        width: 60%;
        padding: 8px 20px;
        background-color: azure;
        border-radius: 10px;
        margin: 10px auto;
        box-sizing: border-box;
    }

    .danger {
        border-left: 3px solid rgb(190, 91, 91);
    }

    .primary {
      border-left: 3px solid rgb(109, 190, 91);
    }

    .warning {
      border-left: 3px solid rgb(235, 245, 97);
    }

    .alert-close {
        position: relative;
        top: 10px;
        align-self: flex-end;
        &:hover {
            cursor: pointer;
            color: red;
        }
        font-size: 20px;
        box-sizing: border-box;
    }
</style>
