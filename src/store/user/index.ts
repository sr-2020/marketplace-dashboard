import { Module } from 'vuex'
import { UserState } from '@/store/user/types'
import { RootState } from '@/store/types'
import { mutations } from '@/store/user/mutations'

const state: UserState = {
  id: 0,
  modelId: 0,
  name: '',
  rights: undefined
}

export const user: Module<UserState, RootState> = { state, mutations }
