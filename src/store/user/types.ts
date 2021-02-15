import { BaseNamedEntity, BaseEntity } from '../types';

export interface User extends BaseNamedEntity {
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