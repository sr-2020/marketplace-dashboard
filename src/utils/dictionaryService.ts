import { Vue } from 'vue-property-decorator'
import HttpAdapter from '@/utils/httpAdapter'

export function updateEntity<T>(
  name: string,
  vueInstance: Vue,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  callback = () => {}
) {
  const state = vueInstance.$store.state[name]
  if (state.length === 0) {
    HttpAdapter.get<T[]>([`a-${name}`]).subscribe(({ data }) => {
      vueInstance.$store.commit(`SET_${name.toUpperCase()}`, data)
      callback()
    })
  }
}
