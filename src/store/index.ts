import { createStore } from 'vuex'

export default createStore({
  state: {
    count: 1
  },
  getters: {
  },
  mutations: {
    changeCount (state) {
      state.count++
    }
  },
  actions: {
  },
  modules: {
  }
})
