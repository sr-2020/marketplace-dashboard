import Vue from 'vue'
import Vuex, { StoreOptions } from 'vuex'
import { RootState } from '@/store/types'
import { mutations } from '@/store/mutations'
import { user } from '@/store/user'
import { ThemeSwitcher } from '@/utils/themeSwitcher'

Vue.use(Vuex)

const store: StoreOptions<RootState> = {
  state: {
    navbarState: true,
    theme: new ThemeSwitcher(window, document)
  },
  mutations,
  modules: {
    user
  }
}

export default new Vuex.Store<RootState>(store)
