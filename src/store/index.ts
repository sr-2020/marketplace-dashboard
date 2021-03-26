import { createStore, StoreOptions } from 'vuex'
import { RootState } from '@/store/types'
import { mutations } from '@/store/mutations'
import { user } from '@/store/user'
import { ThemeSwitcher } from '@/utils/themeSwitcher'
import { logs } from '@/store/log'

const store: StoreOptions<RootState> = {
  state: {
    navbarState: true,
    theme: new ThemeSwitcher(window, document),
  },
  mutations,
  modules: {
    user,
    logs,
  },
}

export default createStore(store)
