import { from, Observable } from "rxjs"
import { ENV } from "../../env/env"

export class HttpClient {
  private _endPoint = ""
  private _reqInit: RequestInit = {
    credentials: "include",
  }

  constructor(commands: string[], reqInit?: RequestInit) {
    this._endPoint = ENV.api + this._getApiLink(commands)
    if (reqInit) {
      this._reqInit = { ...this._reqInit, ...reqInit }
    }
  }

  public get(): Observable<any> {
    return from(
      fetch(this._endPoint, {
        method: "GET",
        ...this._reqInit
      })
    )
  }

  public post(body: any): Observable<any> {
    return from(
      fetch(this._endPoint, {
        method: "POST",
        body,
        ...this._reqInit
      })
    )
  }
  private _getApiLink(commands: string[]) {
    return commands.join("/")
  }
}
