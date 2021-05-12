import { BaseEntity, BaseNamedEntity } from '../types'

export interface UserState extends BaseNamedEntity {
  name: string;
  modelId: number;
  rights?: UserRights;
  balance?: number;
}

export interface User extends BaseNamedEntity {
  name: string;
  modelId: number;
  rights?: UserRights;
  balance?: number;
}

export interface UserRights extends BaseEntity {
  role: Roles;
}

export enum Roles {
  Root = 'root',
  Master = 'master',
  Junior = 'junior',
}
