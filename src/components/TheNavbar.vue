<template>
    <nav class="navbar">
        <h3>Online Bank</h3>

        <ul class="navbar-menu">
            <li>
                <router-link to="/">Заявки</router-link>
            </li>
            <li>
                <router-link to="/help">Помощь</router-link>
            </li>
            <li>
                <a href="#" @click.prevent="openSidebar">Сообщения</a>
            </li>
            <li>
                <a href="#" @click.prevent="logout">Выход</a>
            </li>
        </ul>
    </nav>
</template>

<script>
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
export default {
  setup () {
    const router = useRouter()
    const store = useStore()

    const openSidebar = () => {
      store.commit('openSidebar')
    }

    return {
      logout: () => {
        store.commit('auth/logout')
        router.push('/auth')
      },
      openSidebar
    }
  }
}
</script>

<style lang="scss" scoped>

.navbar {
  width: 100%;
  background-color: azure;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 0 20px;
}

.navbar-menu {
    display: flex;
    list-style: none;
    gap: 40px;
}

a {
    color: black;
    text-decoration: none;
}

.active {
  text-decoration: underline;
}
</style>
