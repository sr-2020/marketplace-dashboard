import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    colorTheme: 'light'
  },
  mutations: {
    changeTheme(state, payload: 'light' | 'dark') {
      state.colorTheme = payload
    }
  },
  actions: {},
  modules: {}
})
