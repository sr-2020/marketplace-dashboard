export type AlertMsgType = "error" | "warning" | "success" | "info";

export interface AlertMsg {
  id: number;
  title: string;
  msg?: string;
  type: AlertMsgType;
}

export interface LogsState {
  alerts: AlertMsg[];
}
