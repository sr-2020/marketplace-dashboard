import { BaseEntity, BaseNamedEntity } from '../types'

export interface User extends BaseNamedEntity {
  sin: Sin;
  modelId: number;
}

export interface UserRights extends BaseEntity {
  role: Roles;
}

export enum Roles {
  Root = 'root',
  Master = 'master',
  Junior = 'junior',
}

export interface Sin extends BaseEntity {
  personName: string;
  modelId: number;
  sin: string;
  currentBalance: number;
  currentScoring: number;
  lifeStyle: string;
  forecastLifeStyle: string;
  metatype: string;
  citizenship: string;
  nationality: string; // не передаем 
  status: string; // не передаем 
  nation: string; // не передаем 
  viza: string;
  pledgee: string;
  insurance: string;
  licenses: string[];
}
