import {Subject} from "rxjs";
import {AlertMsg, AlertMsgType} from "@/store/log/types";

export class AlertService {
    public alert = new Subject<AlertMsg>();
    private _counter = 0;

    public addAlert(title: string, msg: string, type: AlertMsgType) {
        this._counter++
        this.alert.next({
            id: this._counter,
            title, msg, type
        });
    }
}

export const AlertController = new AlertService()
