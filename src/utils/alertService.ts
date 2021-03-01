import {Subject} from "rxjs";

export interface AlertMsg {
    id: number;
    title: string;
    msg?: string;
    type: AlertMsgType;
}

export type AlertMsgType = "error" | "warning" | "success" | "info";

export class AlertService {
    public alert = new Subject<AlertMsg | null>();
    private _counter = 0;

    public addAlert(title: string, msg: string, type: AlertMsgType) {
        this._counter++
        this.alert.next({
            id: this._counter, title, msg, type
        });
    }
}

export const AlertController = new AlertService()
