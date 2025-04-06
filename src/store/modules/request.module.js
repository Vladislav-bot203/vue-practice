import axios from '../../axios/request'
import store from '../index'

export default {
  namespaced: true,
  state () {
    return {
      requests: []
    }
  },
  getters: {
    requests (state) {
      return state.requests
    }
  },
  mutations: {
    setRequests (state, requests) {
      state.requests = requests
    },
    addRequest (state, request) {
      state.requests.push(request)
    }
  },
  actions: {
    async create ({ commit, dispatch }, payload) {
      try {
        const token = store.getters['auth/token']
        const { data } = await axios.post(`/requests.json?auth=${token}`, payload)

        commit('addRequest', { ...payload, id: data.name })
        dispatch('setMessage', {
          value: 'Заявка успешно создана',
          type: 'primary'
        },
        { root: true })
      } catch (error) {
        dispatch('setMessage', {
          value: error.message,
          type: 'danger'
        },
        { root: true })
      }
    },
    async load ({ dispatch, commit }) {
      try {
        const token = store.getters['auth/token']
        const { data } = await axios.get(`/requests.json?auth=${token}`)
        const requests = Object.keys(data).map((id) => {
          return { ...data[id], id }
        })
        commit('setRequests', requests)
      } catch (error) {
        dispatch('setMessage', {
          value: error.message,
          type: 'danger'
        },
        { root: true })
      }
    }
  }
}
