import HttpAdapter from '@/utils/httpAdapter'
import { Store } from 'vuex'

export function updateEntity<T>(
  name: string,
  options: {
    store: Store<any>;
    force?: boolean;
    callback?: (data: T[]) => void;
  }
) {
  const state = options.store.state[name]
  if (state.length === 0 || options.force) {
    HttpAdapter.get<T[]>([`a-${name}`]).subscribe(({ data }) => {
      options.store.commit(`SET_${name.toUpperCase()}`, data)
      if (options.callback) {
        options.callback(data)
      }
    })
  }
}
