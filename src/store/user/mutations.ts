import { MutationTree } from 'vuex'
import { UserRights, UserState } from './types'

export const mutations: MutationTree<UserState> = {
  SET_USER(state, payload: UserState) {
    state = payload
  },
  CHANGE_USER_RIGHTS(state, rights: UserRights) {
    state.rights = rights
  }
}

export enum UserMutations {
  SET_USER = 'SET_USER',
  CHANGE_USER_RIGHTS = 'CHANGE_USER_RIGHTS'
}
