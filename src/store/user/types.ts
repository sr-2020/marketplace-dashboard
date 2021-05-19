import { BaseEntity, BaseNamedEntity } from '../types'

export interface User extends BaseNamedEntity {
  id: number;
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
