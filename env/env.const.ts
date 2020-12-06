export const consts: EnvConstats = {
  version: '0.0.1'
}
export interface EnvVariables extends EnvConstats {
  prod: boolean
  api: string
}
interface EnvConstats {
  version: string
}
