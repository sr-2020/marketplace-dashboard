import { Observable } from "rxjs";
import { fromPromise } from "rxjs/internal-compatibility";
import { pluck } from "rxjs/operators";
import axios, { AxiosRequestConfig } from "axios";

interface ResponseModel<Model> {
  data: Model;
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
        params
      })
    ).pipe(pluck("data"));
  }

  static delete<R>(
    commands: string[],
    params: { [key: string]: any } = {}
  ): Observable<ResponseModel<R>> {
    return fromPromise(
      axios.delete<ResponseModel<R>>(
        HttpAdapter._convertCommandsToUri(commands),
        {
          params
        }
      )
    ).pipe(pluck("data"));
  }

  static patch<P, R>(
    commands: string[],
    payload: P
  ): Observable<ResponseModel<R>> {
    return fromPromise(
      axios.patch<ResponseModel<R>>(
        HttpAdapter._convertCommandsToUri(commands),
        payload
      )
    ).pipe(pluck("data"));
  }

  static post<P, R>(
    commands: string[],
    payload: P
  ): Observable<ResponseModel<R>> {
    return fromPromise(
      axios.post<ResponseModel<R>>(
        HttpAdapter._convertCommandsToUri(commands),
        payload
      )
    ).pipe(pluck("data"));
  }

  private static getOptions(): AxiosRequestConfig {
    const header = {
      "x-user-id": "44043"
    };
    return { ...header, withCredentials: true };
  }

  private static _convertCommandsToUri(commands: string[]): string {
    return HttpAdapter._endpoint + commands.join("/");
  }
}
