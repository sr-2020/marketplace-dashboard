import consts from './env.const'

export const ENVIRONMENT = {
  prod: false,
  api: '',
  ...consts
}

export interface Envirnment {
  prod: boolean
}
