import { RootState } from '@/store/types'
import { Module } from 'vuex'
import { LogsState } from '@/store/log/types'
import { mutations } from '@/store/log/mutations'

const state: LogsState = {
  alerts: [],
}

export const logs: Module<LogsState, RootState> = { state, mutations }
