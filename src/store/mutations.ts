import { MutationTree } from 'vuex'
import { RootState } from '@/store/types'

export enum RootMutations {
  NAVBAR_TOGGLE = 'NAVBAR_TOGGLE',
  CHANGE_THEME = 'CHANGE_THEME'
}

export const mutations: MutationTree<RootState> = {
  NAVBAR_TOGGLE(state, payload: boolean) {
    state.navbarState = payload
  },
  CHANGE_THEME(state) {
    state.theme.changeTheme()
  }
}
