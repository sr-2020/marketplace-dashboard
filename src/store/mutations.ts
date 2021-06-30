import { MutationTree } from 'vuex'
import { LifeStyle, RootState, Session } from "@/store/types";
import { Nomenklatura, ProductType, Sku, Specialisation } from "@/store/products/types";
import { User } from '@/store/user/types'
import { Corporation, Shop } from '@/store/organisations/types'

export enum RootMutations {
  NAVBAR_TOGGLE = 'NAVBAR_TOGGLE',
  SET_SESSION = 'SET_SESSION',
  CHANGE_THEME = 'CHANGE_THEME'
}

export const mutations: MutationTree<RootState> = {
  NAVBAR_TOGGLE(state, payload: boolean) {
    state.navbarState = payload
  },
  CHANGE_THEME(state) {
    state.theme.changeTheme()
  },
  SET_CORPORATIONS(state, payload: Corporation[]) {
    state.corporations = payload
  },
  SET_SESSION(state, payload: Session) {
    state.session = payload
  },
  SET_SKUS(state, payload: Sku[]) {
    state.skus = payload
  },
  SET_SHOPS(state, payload: Shop[]) {
    state.shops = payload
  },
  SET_NOMENKLATURAS(state, payload: Nomenklatura[]) {
    state.nomenklaturas = payload
  },
  SET_PRODUCTTYPES(state, payload: ProductType[]) {
    state.producttypes = payload
  },
  SET_SPECIALISATIONS(state, payload: Specialisation[]) {
    state.specialisations = payload
  },
  SET_LIFESTYLES(state, payload: LifeStyle[]) {
    state.lifestyles = payload
  },
  SET_USERS(state, payload: User[]) {
    state.users = payload
  },
}
