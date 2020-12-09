import { from, Observable } from "rxjs"
import { pluck } from "rxjs/operators"
import { ENV } from "../../env/env"

export class ApiClient {
  private _url = ""
  private _reqInit: RequestInit = {
    credentials: "include",
  }

  constructor(commands: string[], reqInit?: RequestInit) {
    this._url = ENV.api + this._getEndPoint(commands)
    if (reqInit) {
      this._reqInit = { ...this._reqInit, ...reqInit }
    }
  }

  public get<T>(): Observable<T | Error> {
    return from(
      fetch(this._url, {
        method: "GET",
        ...this._reqInit,
      })
    ).pipe(pluck("data", "body"))
  }

  public post<T>(body: any): Observable<T | Error> {
    return from(
      fetch(this._url, {
        method: "POST",
        body,
        ...this._reqInit,
      })
    ).pipe(pluck("data", "body"))
  }

  private _getEndPoint(commands: string[]): string {
    return commands.join("/")
  }
}
