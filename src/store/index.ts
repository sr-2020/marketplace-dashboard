import { createStore, StoreOptions } from 'vuex'
import { RootState } from '@/store/types'
import { mutations } from '@/store/mutations'
import { ThemeSwitcher } from '@/utils/themeSwitcher'
import { logs } from '@/store/log'

const store: StoreOptions<RootState> = {
  state: {
    corporations: [],
    lifestyles: [],
    navbarState: true,
    nomenklaturas: [],
    shops: [],
    skus: [],
    specialisations: [],
    theme: new ThemeSwitcher(window, document),
    users: [],
  },
  mutations,
  modules: {
    logs,
  },
}

export default createStore(store)
