import { consts, EnvVariables } from './env.const'

export const ENV: EnvVariables = {
  prod: true,
  api: '',
  ...consts
}
