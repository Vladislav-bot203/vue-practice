<template>
    <app-loader v-if="loading"></app-loader>
    <app-page title="Заявка" v-else-if="request.fio" back>
        <p><strong>Имя владельца:</strong> {{ request.fio }}</p>
        <p><strong>Телефон:</strong> {{ request.phone }}</p>
        <p><strong>Сумма:</strong> {{ currency(request.amount) }}</p>
        <p><strong>Статус:</strong> <app-status :type="request.status"></app-status></p>

        <div class="form-control">
            <label for="status"><strong>Статус:</strong></label>
            <select id="status" v-model="status">
                <option value="done">Завершен</option>
                <option value="cancelled">Отменен</option>
                <option value="active">Активен</option>
                <option value="pending">Выполняется</option>
            </select>
        </div>

        <button @click="remove" class="delete">Удалить</button>
        <button @click="update" :class="[hasChanges ? 'inactive' : 'update']" :disabled="hasChanges">Обновить</button>
    </app-page>
    <h3 v-else class="warning">Заявки с ID = {{ $route.params.id }} нет.</h3>
</template>

<script setup>
import AppPage from '@/components/ui/AppPage.vue'
import AppLoader from '@/components/ui/AppLoader.vue'
import { useRoute, useRouter } from 'vue-router'
import { ref, onMounted, computed } from 'vue'
import { useStore } from 'vuex'
import AppStatus from '@/components/ui/AppStatus.vue'
import currency from '@/utils/currency-formatter'

const loading = ref(true)
const route = useRoute()
const store = useStore()
const request = ref({})
const status = ref('')
const router = useRouter()

onMounted(async () => {
  request.value = await store.dispatch('request/loadById', route.params.id)
  status.value = request.value?.status
  loading.value = false
})

const hasChanges = computed(() => request.value.status === status.value)

const remove = async () => {
  await store.dispatch('request/remove', route.params.id)
  router.push('/')
}

const update = async () => {
  const data = { ...request.value, status: status.value, id: route.params.id }
  await store.dispatch('request/update', data)
  request.value.status = status.value
}

</script>

<style lang="scss" scoped>

.warning {
    background-color: azure;
    width: 60%;
    border-radius: 10px;
    text-align: center;
    margin: 20px auto;
    padding: 10px;
}

button {
    border: 0;
    width: 200px;
    padding: 7px;
    margin-bottom: 10px;
    border-radius: 10px;
    color: white;

    &:hover {
        cursor: pointer;
    }
}

.delete {
    background-color: rgb(180, 74, 74);
}

.update {
    background-color: rgb(99, 180, 74);
}

select {
    padding: 5px;
    width: 210px;
    border-radius: 10px;
    border: 1px solid rgb(190, 184, 184);
}

.form-control {
    display: flex;
    justify-content: flex-start;
    gap: 10px;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 20px;
}

.inactive {
    background-color: rgb(196, 191, 191);
    pointer-events: none;
}
</style>
