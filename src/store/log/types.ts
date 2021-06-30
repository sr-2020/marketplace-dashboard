export type AlertMsgType = 'error' | 'warning' | 'success' | 'info'

export interface AlertMsg {
  id: number
  title: string
  msg?: string
  timestamp: number
  type: AlertMsgType
}

export interface LogsState {
  alerts: AlertMsg[]
}
