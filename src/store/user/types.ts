import { BaseEntity, BaseNamedEntity } from '../types'

export interface UserState extends BaseNamedEntity {
  name: string
  modelId: number
  rights?: UserRights
}

export interface UserRights extends BaseEntity {
  role: Roles
}

export enum Roles {
  Root = 'root',
  Master = 'master',
  Junior = 'junior'
}
