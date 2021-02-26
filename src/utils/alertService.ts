import {BehaviorSubject} from "rxjs";

export interface AlertMsg {
    id: number;
    title: string;
    msg: string;
    type: AlertMsgType;
}

export type AlertMsgType = "error" | "warning" | "success" | "info";

export default class AlertService {
    public alertTrigger = new BehaviorSubject<AlertMsg | null>(null);
    private _counter = 0;

    public addAlert(title: string, msg: string, type: AlertMsgType) {
        this._counter++
        this.alertTrigger.next({
            id: this._counter, title, msg, type
        });
    }
}
