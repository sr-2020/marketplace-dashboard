import { EMPTY, Observable } from 'rxjs'
import { fromPromise } from 'rxjs/internal-compatibility'
import { catchError, pluck } from 'rxjs/operators'
import axios, { AxiosError, AxiosRequestConfig } from 'axios'

export interface ResponseModel<M> {
  data: M;
  status: boolean;
  message: string | null;
}

export default class HttpAdapter {
  private static readonly _endpoint: string = process.env.VUE_APP_API_URL;

  static get<R>(
    commands: string[],
    params: { [key: string]: any } = {}
  ): Observable<ResponseModel<R>> {
    return fromPromise(
      axios.get<ResponseModel<R>>(HttpAdapter._convertCommandsToUri(commands), {
        ...this.getOptions(),
        params,
      })
    ).pipe(catchError(this._unauthorizedResolver), pluck('data'))
  }

  static delete<R>(
    commands: string[],
    params: { [key: string]: any } = {}
  ): Observable<ResponseModel<R>> {
    return fromPromise(
      axios.delete<ResponseModel<R>>(
        HttpAdapter._convertCommandsToUri(commands),
        {
          ...this.getOptions(),
          params,
        }
      )
    ).pipe(catchError(this._unauthorizedResolver), pluck('data'))
  }

  static patch<P, R>(
    commands: string[],
    payload: P
  ): Observable<ResponseModel<R>> {
    return fromPromise(
      axios.patch<ResponseModel<R>>(
        HttpAdapter._convertCommandsToUri(commands),
        payload,
        {
          ...this.getOptions(),
        }
      )
    ).pipe(catchError(this._unauthorizedResolver), pluck('data'))
  }

  static post<P, R>(
    commands: string[],
    payload: P
  ): Observable<ResponseModel<R>> {
    return fromPromise(
      axios.post<ResponseModel<R>>(
        HttpAdapter._convertCommandsToUri(commands),
        payload,
        {
          ...this.getOptions(),
        }
      )
    ).pipe(catchError(this._unauthorizedResolver), pluck('data'))
  }

  private static getOptions(): AxiosRequestConfig {
    const headers: { [key: string]: any } = {}

    if (process.env.NODE_ENV === 'development') {
      headers["x-user-id"] = '44043'
    }

    return { headers, withCredentials: true }
  }

  private static _convertCommandsToUri(commands: string[]): string {
    return HttpAdapter._endpoint + commands.join('/')
  }

  private static _unauthorizedResolver<R>(err: AxiosError<ResponseModel<R>>) {
    if (err.response?.status === 403) {
      const redirectedFrom = document.location.href
      document.location.href = `http://web.evarun.ru/login?externalurl=${redirectedFrom}`
    }
    return EMPTY
  }
}
