import axios from 'axios'
import error from '@/utils/error'

const TOKEN_KEY = 'jwt-token'

export default {
  namespaced: true,
  state () {
    return {
      token: localStorage.getItem('jwt-token')
    }
  },
  mutations: {
    setToken (state, token) {
      state.token = token
      localStorage.setItem(TOKEN_KEY, token)
    },
    logout (state) {
      state.token = null
      localStorage.removeItem(TOKEN_KEY)
    }
  },
  actions: {
    async login ({ commit, dispatch }, payload) {
      try {
        const url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.VUE_APP_FB_KEY}`
        const { data } = await axios.post(url, { ...payload, returnSecureToken: true })
        commit('setToken', data.idToken)
      } catch (err) {
        dispatch(
          'setMessage',
          {
            value: error(err.response.data.error.message),
            type: 'danger'
          },
          {
            root: true
          }
        )
        throw new Error()
      }
    }
  },
  getters: {
    token (state) {
      return state.token
    },
    isAuthentificated (_, getters) {
      return !!getters.token
    }
  }
}
