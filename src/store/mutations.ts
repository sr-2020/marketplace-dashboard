import { MutationTree } from 'vuex'
import { LifeStyle, RootState } from '@/store/types'
import { Specialisation } from '@/store/products/types'
import { User } from '@/store/user/types'

export enum RootMutations {
  NAVBAR_TOGGLE = 'NAVBAR_TOGGLE',
  CHANGE_THEME = 'CHANGE_THEME',
  SET_SPECIALISATIONS = 'SET_SPECIALISATIONS',
  SET_LIFESTYLES = 'SET_LIFESTYLES',
  SET_USERS = 'SET_USERS'
}

export const mutations: MutationTree<RootState> = {
  NAVBAR_TOGGLE(state, payload: boolean) {
    state.navbarState = payload
  },
  CHANGE_THEME(state) {
    state.theme.changeTheme()
  },
  SET_SPECIALISATIONS(state, payload: Specialisation[]) {
    state.specialisations = payload
  },
  SET_LIFESTYLES(state, payload: LifeStyle[]) {
    state.lifestyles = payload
  },
  SET_USERS(state, payload: User[]) {
    state.users = payload
  }
}
