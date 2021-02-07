import Vue from 'vue'
import Vuex, { StoreOptions } from 'vuex'
import { RootState } from '@/store/types'
import { mutations } from '@/store/mutations'

Vue.use(Vuex)

const store: StoreOptions<RootState> = {
  state: {
    navbarState: false
  },
  mutations
}

export default new Vuex.Store<RootState>(store)
