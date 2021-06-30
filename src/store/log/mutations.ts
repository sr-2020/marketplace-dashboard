import { MutationTree } from 'vuex'
import { AlertMsg, LogsState } from '@/store/log/types'

export enum LogsMutations {
  LOG_ALERT = 'LOG_ALERT',
}

export const mutations: MutationTree<LogsState> = {
  LOG_ALERT(state, payload: AlertMsg) {
    state.alerts.push(payload)
  },
}
