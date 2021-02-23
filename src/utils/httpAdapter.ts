import { Observable } from 'rxjs'
import { fromPromise } from 'rxjs/internal-compatibility'
import { pluck } from 'rxjs/operators'
import axios, { AxiosRequestConfig } from 'axios'

interface ResponseModel<Model> {
  data: Model
  status: boolean,
  message: string | null
}

export default class HttpAdapter {
  static get<Response>(endPoint: string): Observable<ResponseModel<Response>> {
    return fromPromise(axios.get<ResponseModel<Response>>(endPoint, { ...this.getOptions() }))
      .pipe(pluck('data'))
  }

  static post<Payload, Response>(endPoint: string, payload: Payload): Observable<ResponseModel<Response>> {
    return fromPromise(axios.post<ResponseModel<Response>>(endPoint, payload))
      .pipe(pluck('data'))
  }

  private static getOptions(): AxiosRequestConfig {
    const header = {
      'x-user-id': '44043'
    }
    return { ...header, withCredentials: true }
  }
}
