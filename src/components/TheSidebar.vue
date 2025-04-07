<template>
    <div class="sidebar" v-if="isVisible">
        <span class="sidebar-close" @click="close">&times;</span>
        <div class="sidebar-content">
            <p>Добро пожаловать в систему по учету заявок в нашем банке. Здесь вы найдете исчерпывающую информацию</p>
        </div>
    </div>
</template>

<script setup>
import { useStore } from 'vuex'
import { computed } from 'vue'

const store = useStore()

const isVisible = computed(() => store.state.sidebar)

const close = () => { store.commit('closeSidebar') }

</script>

<style lang="scss" dcoped>
.sidebar {
    position: absolute;
    width: 20%;
    right: 0;
    top: 0;
    z-index: 2;
    height: 100%;
    background-color: rgba(235, 239, 243, 0.97);
    display: flex;
    flex-direction: column;
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
}

.sidebar-close {
    font-size: 35px;
    color: rgb(172, 164, 164);
    align-self: flex-end;
    margin-right: 10px;
    justify-self: center;

    &:hover {
        cursor: pointer;
        color: black;
    }
}

.sidebar-content {
    width: 90%;
    align-self: center;
    font-size: 12px;
}

</style>
