<template>
    <h4 v-if="requests.length === 0">Заявок пока нет</h4>
    <table v-else class="table">
        <thead>
            <tr>
                <th>#</th>
                <th>ФИО</th>
                <th>Телефон</th>
                <th>Сумма</th>
                <th>Статус</th>
                <th>Действие</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(request, idx) in requests" :key="request.id">
                <td>{{ idx + 1 }}</td>
                <td>{{ request.fio }}</td>
                <td>{{ request.phone }}</td>
                <td>{{ currency(request.amount) }}</td>
                <td><app-status :type="request.status"></app-status></td>
                <td>
                    <router-link
                        v-slot="{ navigate }"
                        custom
                        :to="{name: 'Request', params: {id: request.id}}"
                    >
                        <button @click="navigate">Открыть</button>
                     </router-link>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script setup>
import { defineProps } from 'vue'
import currency from '@/utils/currency-formatter'
import AppStatus from '../ui/AppStatus.vue'

defineProps(['requests'])

</script>

<style lang="scss" scoped>

.table {
  width: 100%;
  margin-bottom: 20px;
  border: 15px solid #F2F8F8;
  border-top: 5px solid #F2F8F8;
  border-collapse: collapse;
  text-align: center;
  font-size: 13px;
}
.table th {
  font-weight: bold;
  padding: 5px;
  background: #F2F8F8;
  border: none;
  border-bottom: 5px solid #F2F8F8;
}
.table td {
  padding: 5px;
  border: none;
  border-bottom: 5px solid #F2F8F8;
}
button {
  padding: 6px;
  width: 100%;
  border: 1px solid rgb(112, 189, 112);
  color: rgb(112, 189, 112);
  background-color: beige;
  border-radius: 5px;

  &:hover {
    cursor: pointer;
  }
}

tr:hover {
    background-color: rgb(222, 185, 185);
}
</style>
