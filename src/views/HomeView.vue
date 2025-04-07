<template>
    <app-loader v-if="loading"></app-loader>
    <app-page title="Список заявок" v-else>
        <template #header>
            <button class="primary" @click="modal = true">Создать</button>
        </template>

        <request-filter v-model="filter"></request-filter>
        <request-table :requests="requests"></request-table>

        <teleport to='body'>
            <app-modal title="Создать заявку" @close="close" v-if="modal">
                <request-modal-body @created="modal = false"></request-modal-body>
            </app-modal>
        </teleport>
    </app-page>
</template>

<script setup>
import AppPage from '@/components/ui/AppPage.vue'
import RequestTable from '@/components/request/RequestTable.vue'
import { ref, computed, onMounted } from 'vue'
import AppModal from '@/components/ui/AppModal.vue'
import RequestModalBody from '@/components/request/RequestModalBody.vue'
import { useStore } from 'vuex'
import AppLoader from '@/components/ui/AppLoader.vue'
import RequestFilter from '@/components/request/RequestFilter.vue'

const modal = ref(false)
const store = useStore()
const loading = ref(false)
const filter = ref({})

onMounted(async () => {
  loading.value = true
  await store.dispatch('request/load')
  loading.value = false
})

const requests = computed(() => store
  .getters['request/requests']
  .filter((request) => {
    if (filter.value.name) {
      return request.fio.includes(filter.value.name)
    }
    return request
  })
  .filter((request) => {
    if (filter.value.status) {
      return request.status === filter.value.status
    }
    return request
  })
)

const close = function () {
  modal.value = false
}

</script>

<style scoped lang="scss">

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
