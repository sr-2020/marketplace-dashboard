import { BaseNamedEntity } from '../types';
import { User } from '../user/types';

export interface Organisation extends BaseNamedEntity {
    owner?: User

}

//Это неизменяемая сущность
export interface Corporation extends BaseNamedEntity {
    logoUrl: string
    owner?: User
}

export interface Shop extends BaseNamedEntity {
    lifestyle: string
    balance: number
    specialisations?: number[]
}